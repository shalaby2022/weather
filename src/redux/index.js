import {combineReducers} from 'redux';
import weatherReducer from './reducers/weather';

const rootReducer = combineReducers({
  weather: weatherReducer,
  users: () => null,
});

export default rootReducer;
