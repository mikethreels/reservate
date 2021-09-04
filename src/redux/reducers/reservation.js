// import update from 'react-addons-update';

const defaultState = [];

const reservationReducer = (state = defaultState, action) => {
  const newAppointment = [...state];
  switch (action.type) {
    case 'CREATE_RESERVATION':
      return newAppointment.concat(action.payload);
    default:
      return state;
  }
};

export default reservationReducer;
