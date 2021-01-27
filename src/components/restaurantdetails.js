/* eslint-disable radix */
/* eslint-disable react/jsx-no-target-blank */
import axios from 'axios';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Action from '../redux/actions/taskAction';
import Menu from './menu';

import detailStyles from './styles/restaurantdetail.module.css';

const restaurantDetails = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { restaurants, session } = props;
  const { restaurantId } = useParams();
  const storeId = parseInt(restaurantId);
  const userId = session[0].data.user.id;
  const [date, setDate] = useState('');

  const currentRestaurant = restaurants.find(c => c.id === storeId);
  const menu = Object.entries(currentRestaurant.menus[0].items);
  const handleChange = e => {
    if (e.target.name === 'date') {
      setDate(e.target.value);
    }
  };

  const handleSubmit = () => {
    const storeUpdate = {
      date,
      store: currentRestaurant,
    };
    axios
      .post(
        'https://reservate-api.herokuapp.com/v1/reservations',
        {
          date,
          confirmed: false,
          userId,
          storeId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
        dispatch(Action.createReservation(storeUpdate));
      });
    history.push('/reservations');
  };

  return (
    <div className={detailStyles.container}>
      <div className={detailStyles.reservationContainer}>
        <Link className={detailStyles.backbutton} to="/overview">Back</Link>
        <div>
          <h1>
            {currentRestaurant.name}
          </h1>
        </div>
        <form action="">
          <input
            type="datetime-local"
            step="3600"
            name="date"
            value={date}
            onChange={handleChange}
            required
          />
          <button className={detailStyles.reservationButton} onClick={handleSubmit} type="button">Make Reservation</button>
        </form>
      </div>
      <div className={detailStyles.allMenu}>
        <div className={detailStyles.menuContainer}>
          {menu.map(menu => <Menu key={Math.random()} meal={menu} />)}
        </div>
      </div>
    </div>
  );
};

restaurantDetails.propTypes = { restaurant: PropTypes.objectOf(PropTypes.string) };

restaurantDetails.defaultProps = {
  restaurant: {},
};

const mapStateToProps = state => ({
  restaurants: state.task.restaurants,
  session: state.session,
});

export default connect(mapStateToProps)(restaurantDetails);
