import axios from 'axios';
import { 
  GET_RESTAURANTS,
} from './actions';

export const getRestaurants = () => {
  return dispatch => {
    axios.get('http://192.168.8.102:3001/v1/stores')
    .then(res => {
      const restaurants = res.data;

      dispatch({
        type: GET_RESTAURANTS,
        restaurants: restaurants
      });
    })
  };
};

export const addRestaurant = (params) => {
    return dispatch => {
        axios.post(`http://192.168.8.102:3001/v1/stores`, {params})
        .then(response => {
            axios.get(`http://192.168.8.102:3001/v1/stores`)
            .then(res => {
                dispatch({
                    type: GET_RESTAURANTS,
                    users: response
                });
            })
        })
    };
};

export const addUser = user => {
  return {
    type: 'ADD_USER',
    payload: user,
  }
}

export const createSession = user => {
  return {
    type: 'CREATE_SESSION',
    payload: user,
  }
}

export const createReservation = reservation => {
  return {
    type: 'CREATE_RESERVATION',
    payload: reservation,
  }
}
