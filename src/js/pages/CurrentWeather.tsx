import axios from 'axios';
import React, { useCallback, useEffect, useState, useMemo } from 'react';

import CurrentWeatherTemplate from '../templates/CurrentWeatherTemplate';

const CurrentWeather: React.FunctionComponent = () => {
  useEffect(() => {
    console.log("２画面目")
  }, [])

  const [textValue, setTextValue] = useState("");
  const [weatherData, setWeatherData] = useState({name:"", weather: [{description: ""}], main: {temp: "", temp_max: "", temp_min: ""}});
  const [errorMessage, setErrorMessage] = useState("");

  const searchWeather = useCallback(
    () => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${textValue}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setWeatherData(res.data);
      }).catch(() => {
        console.log("エラーが発生しました。")
        setErrorMessage("エラーが発生しました。")
      })
    },
    [textValue],
  )

  const data = useMemo(
    () => {
      return weatherData
    },
    [weatherData],
  )

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTextValue(event.target.value);
  }
  
  return (
    <CurrentWeatherTemplate appText="Weather App" titleText="Result" buttonText="Search" weatherData={data} onChangeText={handleChange} onEvent={searchWeather} ErrorMessageText={errorMessage}/>
  )
}

export default CurrentWeather;