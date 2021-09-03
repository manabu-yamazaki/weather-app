import React, { useState } from "react";
import axios from "axios";

interface WeatherInfoProps {
  cityName: string;
}

const WeatherInfo: React.FunctionComponent<WeatherInfoProps> = ({cityName}) => {
  const [weatherData, setWeatherData] = useState({name:"", weather: [{description: ""}], main: {temp: "", temp_max: "", temp_min: ""}});
  
  if(cityName && cityName !== weatherData.name){
    console.log("aaa")
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=8942dc64e539e7780d740871d99384f5')
    .then(res => {
      setWeatherData(res.data);
      console.log(res.data)
    })
  }

  const renderWeather = () => {
    return (
      weatherData.weather.map((d,key) => <li key={key}>{d.description}</li>)
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