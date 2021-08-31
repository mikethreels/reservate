import update from 'react-addons-update';

const defaultState = [{
  data: {
    logged_in: false,
  },
}];

const sessionReducer = (state = defaultState, action) => {
  const newUser = [action.payload];
  switch (action.type) {
    case 'CREATE_SESSION':
      return newUser;
    case 'DESTROY_SESSION':
      return defaultState;
    case 'CREATE_RESERVATION':
      return update(state, {
        0: {
          data: {
            user: {
              reservations: { $push: [action.payload] },
            },
          },
        },
      });
    default:
      return state;
  }
};

export default sessionReducer;
