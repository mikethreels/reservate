/* eslint-disable import/no-anonymous-default-export */
import { 
  GET_RESTAURANTS,
} from '../actions/actions';
  const INITIAL_STATE = {
    restaurants: [],
    loading : false,
  };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RESTAURANTS: {
      return {
        ...state,
        restaurants: action.restaurants,
        loading: false
      };
    } 
    default:
      return state;
  }
};
