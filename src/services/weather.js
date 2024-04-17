import axios from 'axios';

export const getWeatherData = async ({dt, country, lang}) => {
  return await axios({
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/history.json',
    params: {
      q: country,
      dt,
      lang,
    },
    headers: {
      'X-RapidAPI-Key': 'c69c937c6cmshcb927cb0ad3eea4p1735c7jsne4ee30c6f7d6',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  });
};
