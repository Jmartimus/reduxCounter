import counter from './counter'
import { combineReducers } from 'redux';

const justOneReducer = combineReducers({
  counter: counter
});

export default justOneReducer;