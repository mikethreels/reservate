import { combineReducers } from 'redux';
import TaskReducer from './taskReducer';
import sessionReducer from './session';
import reservationReducer from './reservation';

const rootReducer = combineReducers({
  task: TaskReducer,
  session: sessionReducer,
  reservation: reservationReducer,
});
export default rootReducer;
