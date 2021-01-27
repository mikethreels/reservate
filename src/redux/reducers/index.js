import { combineReducers } from 'redux';
import TaskReducer from './taskReducer';
import sessionReducer from './session';

const rootReducer = combineReducers({
  task: TaskReducer,
  session: sessionReducer,
});
export default rootReducer;
