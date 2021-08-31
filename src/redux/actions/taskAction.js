import axios from 'axios';
import {
  GET_RESTAURANTS,
} from './actions';

export const getRestaurants = () => dispatch => {
  axios.get('https://reservate-api.herokuapp.com/v1/stores')
    .then(res => {
      const restaurants = res.data;

      dispatch({
        type: GET_RESTAURANTS,
        restaurants,
      });
    });
};

export const addRestaurant = params => dispatch => {
  axios.post('https://reservate-api.herokuapp.com/v1/stores', { params })
    .then(response => {
      axios.get('https://reservate-api.herokuapp.com/v1/stores')
        .then(() => {
          dispatch({
            type: GET_RESTAURANTS,
            users: response,
          });
        });
    });
};

export const addUser = user => ({
  type: 'ADD_USER',
  payload: user,
});

export const createSessionCall = async (email, password) => {
  try {
    const response = axios.post('https://reservate-api.herokuapp.com//v1/sessions',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    return response;
  } catch (error) {
    const { response } = error;
    const { request, ...errorObject } = response;
    console.log(response);
    return errorObject;
  }
};

export const createSession = user => ({
  type: 'CREATE_SESSION',
  payload: user,
});

export const destroySession = () => ({
  type: 'DESTROY_SESSION',
});

export const createReservation = reservation => ({
  type: 'CREATE_RESERVATION',
  payload: reservation,
});
