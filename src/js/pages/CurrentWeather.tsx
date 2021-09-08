import React, { useEffect, useState } from 'react';

import axiosEx from "../axios";
import CurrentWeatherTemplate from '../templates/CurrentWeatherTemplate';

const CurrentWeather: React.FunctionComponent = () => {
  useEffect(() => {
    console.log("２画面目")
  }, [])

  const [errorMessage, setErrorMessage] = useState("");
  const [textValue, setTextValue] = useState("");
  //型定義
  const [weatherData, setWeatherData] = useState(
    {
      name:"",
      weather: [
        {
          description: "",
          icon: ""
        }
      ],
      main: {
        temp: "",
        feel_like: "",
        pressure: "",
        humidity: "",
        temp_max: "",
        temp_min: ""
      },
      wind: {
        speed: ""
      }
    }
  );

  const searchWeather = async () => {
    try {
      const resp = await axiosEx.getWeatherInfo(textValue)
      setWeatherData(resp);
      setErrorMessage("")
    } catch (e) {
      console.log("エラーが発生しました。")
      setErrorMessage("エラーが発生しました。")
    }
  }

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTextValue(event.target.value);
  }
  
  return (
    <CurrentWeatherTemplate appText="Weather App" titleText="Result" buttonText="Search" weatherData={weatherData} onChangeText={handleChange} onEvent={searchWeather} ErrorMessageText={errorMessage}/>
  )
}

export default CurrentWeather;