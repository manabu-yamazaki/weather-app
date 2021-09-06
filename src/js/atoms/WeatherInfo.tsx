import React from 'react';

interface WeatherInfoProps {
  weatherData: any;
}

const renderWeather = (weather) => {
  return (
    weather.map((data,key: React.Key) => <li key={key}>{data.description}</li>)
  )
}

const WeatherInfo: React.FunctionComponent<WeatherInfoProps> = ({weatherData}) => {
  return (
    <div>
      <div>{weatherData.name}</div>
      <div>
        <h3>天気</h3>
        <ul>
          {renderWeather(weatherData.weather)}
        </ul>
      </div>
      <div>現在の気温：{weatherData.main.temp}</div>
      <div>最高気温：{weatherData.main.temp_max}</div>
      <div>最低気温：{weatherData.main.temp_min}</div>
    </div>
  )
}

export default WeatherInfo;