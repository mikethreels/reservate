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
    default:
      return state;
  }
};

export default sessionReducer;
