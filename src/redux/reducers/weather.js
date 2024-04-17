import {
  LOCATION_DATA_FETCHED,
  ERROR_FETCHED,
  FETCHING_STATRT,
  WEATHER_FETCHED,
} from '../actionTypes';

const initialState = {
  isLoading: false,
  data: [],
  error: '',
  location: '',
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_STATRT:
      return {
        ...state,
        isLoading: true,
      };
    case WEATHER_FETCHED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case LOCATION_DATA_FETCHED:
      return {
        ...state,
        isLoading: false,
        location: action.payload,
      };
    case ERROR_FETCHED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
