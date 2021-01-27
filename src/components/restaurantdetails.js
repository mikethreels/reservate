/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Action from '../redux/actions/taskAction'
import Menu from './menu';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import detailStyles from './styles/restaurantdetail.module.css';

const restaurantDetails = props => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { restaurants, session} = props;
  const { restaurantId } = useParams();
  const store_id = parseInt(restaurantId);
  const user_id = session[0].data.user.id;
  const [date, setDate] = useState('');
  
  const currentRestaurant = restaurants.find(c => c.id === store_id);
  const menu = Object.entries(currentRestaurant.menus[0].items)
  const handleChange = e => {
    if (e.target.name === 'date') {
      setDate(e.target.value)
    }
  }
  
  const handleSubmit = e => {
    const storeUpdate = {
      date,
      store: currentRestaurant
    }
    axios
      .post(
        "https://reservate-api.herokuapp.com/v1/reservations",
        {
          date: date,
          confirmed: false,
          user_id: user_id,
          store_id: store_id
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
      .then(response => {
        dispatch(Action.createReservation(storeUpdate))
      })
    history.push('/reservations')
  }

  return (
    <div className={detailStyles.container}>
      <div className={detailStyles.reservationContainer}>
        <Link className={detailStyles.backbutton} to={'/overview'} >Back</Link>
        <div>
          <h1>
            {currentRestaurant.name}
          </h1>
        </div>
        <form action="">
          <input 
            type='datetime-local' 
            step="3600" 
            name='date'  
            value={date} 
            onChange={handleChange} 
            required 
          />
          <button className={detailStyles.reservationButton} onClick={handleSubmit} type='button'>Make Reservation</button>
        </form>
      </div>
      <div className={detailStyles.allMenu}>
        <div className={detailStyles.menuContainer}>
          {menu.map(menu => <Menu key={Math.random()} meal={menu} />)}
          {/* {currentRestaurant.menus[0].items.breakfast} */}
        </div>
      </div>
    </div>
  );
};

restaurantDetails.propTypes = { restaurant: PropTypes.object };

restaurantDetails.defaultProps = {
  restaurant: {},
};


const mapStateToProps = state => ({
  restaurants: state.task.restaurants,
  session: state.session
});

export default connect(mapStateToProps)(restaurantDetails);