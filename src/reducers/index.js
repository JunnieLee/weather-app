import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

// state : reducer 모음 
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
