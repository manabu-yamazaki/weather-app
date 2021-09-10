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
    <div className="weatherInfo">
      <div>{weatherData.name}</div>
      <div>
        <h3>天気</h3>
        <ul>
          {renderWeather(weatherData.weather)}
        </ul>
      </div>
      <div className="weatherInfo__itemTemp">気温：{weatherData.main.temp}</div>
      <div>体感気温：{weatherData.main.feel_like}</div>
      <div>最高気温：{weatherData.main.temp_max}</div>
      <div>最低気温：{weatherData.main.temp_min}</div>
      <div>気圧：{weatherData.main.pressure}</div>
      <div>湿度：{weatherData.main.humidity}</div>
      <div>風速：{weatherData.wind.speed}</div>
    </div>
  )
}

export default WeatherInfo;