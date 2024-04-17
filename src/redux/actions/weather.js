import {getWeatherData} from '../../services/weather';
import {
  LOCATION_DATA_FETCHED,
  ERROR_FETCHED,
  FETCHING_STATRT,
  WEATHER_FETCHED,
} from '../actionTypes';

export const getWeather = (
  country = 'cairo',
  dt = '2024-04-17',
  lang = 'en',
) => {
  return async dispatch => {
    try {
      dispatch({type: FETCHING_STATRT});
      const {data} = await getWeatherData({dt, country, lang});
      dispatch({
        type: WEATHER_FETCHED,
        payload: data?.forecast?.forecastday,
      });
      dispatch({
        type: LOCATION_DATA_FETCHED,
        payload: data?.location,
      });
    } catch (er) {
      dispatch({type: ERROR_FETCHED, payload: er.message});
    }
  };
};
