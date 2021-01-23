import update from 'react-addons-update';
const defaultState = {};

const sessionReducer = (state = defaultState, action) => {
  const newUser = [action.payload];
  const newReservation = [action.payload]
  switch (action.type) {
    case 'CREATE_SESSION':
      console.log(`CREATE_SESSION ${action.payload}`)
      return newUser
    case 'CREATE_RESERVATION':
      console.log(`CREATE_RESERVATION ${action.payload}`)
      const incReservation = state[0].data.user.reservations.concat(action.payload)
      return update(state, {
        0: {
          data: {
            user: {
              reservations: {$push: [action.payload]}
            }
          }
        }
      })
      //   ...state,
      //   data: {
      //     ...state.data,
      //     user: {
      //       ...state.data.user,
      //       reservations: {
      //         ...state.data.user.reservations.concat(action.payload)
      //       }
      //     }
      //   }
      // ]
    default:
      return state;
  }
};

export default sessionReducer;