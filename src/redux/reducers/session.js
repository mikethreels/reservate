const defaultState = [];

const sessionReducer = (state = defaultState, action) => {
  const newUser = [action.payload];
  switch (action.type) {
    case 'CREATE_SESSION':
      console.log(`session reducer ${action.payload}`)
      return newUser
    default:
      return state;
  }
};

export default sessionReducer;