import axios from 'axios';
import React, { useState } from 'react';

interface WeatherInfoProps {
  cityName: string;
}

const WeatherInfo: React.FunctionComponent<WeatherInfoProps> = ({cityName}) => {
  const [weatherData, setWeatherData] = useState({name:"", weather: [{description: ""}], main: {temp: "", temp_max: "", temp_min: ""}});
  
  if(cityName && cityName !== weatherData.name){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + process.env.REACT_APP_API_KEY)
    .then(res => {
      setWeatherData(res.data);
    }).catch(() => {
      console.log("エラーが発生しました。")
    })
  }

  const renderWeather = () => {
    return (
      weatherData.weather.map((data,key) => <li key={key}>{data.description}</li>)
    )
  }

  return (
    <div>
      <div>{weatherData.name}</div>
      <div>
        <h3>天気</h3>
        <ul>
          {renderWeather()}
        </ul>
      </div>
      <div>現在の気温：{weatherData.main.temp}</div>
      <div>最高気温：{weatherData.main.temp_max}</div>
      <div>最低気温：{weatherData.main.temp_min}</div>
    </div>
  )
}

export default WeatherInfo;