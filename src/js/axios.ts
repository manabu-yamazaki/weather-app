import axios from 'axios';

class axiosEx {
  static async getWeatherInfo(textValue: string) {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${textValue}&appid=${process.env.REACT_APP_API_KEY}`);
    return resp.data;
  }
}

export default axiosEx;