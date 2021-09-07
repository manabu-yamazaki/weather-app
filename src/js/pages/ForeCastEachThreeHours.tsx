import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ForeCastEachThreeHoursTemplate from '../templates/ForeCastEachThreeHoursTemplate';

const ForeCastEachThreeHours: React.FunctionComponent = () => {
  useEffect(() => {
    console.log("３画面目")
  }, [])

  const [errorMessage, setErrorMessage] = useState("");
  const [textValue, setTextValue] = useState("");
  const [weatherData, setWeatherData] = useState(
    {
      city: {name:""}, 
      list: [
        {
          dt: "", 
          main: {
            temp: ""
          },
          weather: [
            {
              description: "", 
              icon: ""
            }
          ],
          wind: {
            speed: ""
          }
        }
      ]
    }
  );
  
  const searchWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${textValue}&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      setWeatherData(res.data);
    }).catch(() => {
      console.log("エラーが発生しました。")
      setErrorMessage("エラーが発生しました。")
    })
  }

  const handleChange = (event) => {
    setTextValue(event.target.value);
  }

  return (
    <ForeCastEachThreeHoursTemplate appText="Weather App" titleText="Result" buttonText="Search" weatherData={weatherData} onChangeText={handleChange} onEvent={searchWeather} ErrorMessageText={errorMessage}/>
  )
}

export default ForeCastEachThreeHours;