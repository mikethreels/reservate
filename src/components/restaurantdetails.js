/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Action from '../redux/actions/taskAction'
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
  const [time, setTime] = useState('');

  const currentRestaurant = restaurants.find(c => c.id === store_id);

  const handleChange = e => {
    console.log(`date: ${date}, time: ${time}`)
    if (e.target.name === 'date') {
      setDate(e.target.value)
    }else {
      setTime(e.target.value)
    }
  }
  
  const handleSubmit = e => {
    const storeUpdate = {
      date,
      store: currentRestaurant
    }
    console.log(storeUpdate)
    axios
      .post(
        "http://192.168.8.102:3001/v1/reservations",
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
        console.log(response)
        dispatch(Action.createReservation(storeUpdate))
      })
    history.push('/reservations')
  }

  return (
    <div className={detailStyles.container}>
      <Link className={detailStyles.backbutton} to={'/overview'} >Go back</Link>
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
        {/* <input 
          type="time" 
          step="3600000" 
          name='time'
          value={time}
          onChange={handleChange}
          required
        /> */}
        <button onClick={handleSubmit} type='button'>Make Reservation</button>
      </form>
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