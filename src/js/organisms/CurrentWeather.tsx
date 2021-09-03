import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SubTitle from '../atoms/SubTitle';
import WeatherInfo from '../atoms/WeatherInfo';
import SearchCity from '../molecules/SearchCity';

interface CurrentWeatherPropsOptional {
  titleText: string;
  buttonText: string;
}

const CurrentWeather: React.FunctionComponent<CurrentWeatherPropsOptional> = ({titleText, buttonText}) => {
  const [cityName, setCityName] = useState("");
  const [textValue, setTextValue] = useState("");

  console.log("２画面目")

  const searchWeather = () => {
    setCityName(textValue);
  }

  const handleChange = (event) => {
    setTextValue(event.target.value);
  }

  return (
    <div>
      <Link to="/">Empty</Link>
      <SearchCity buttonText={buttonText} onChangeText={handleChange} onEvent={searchWeather} />
      <SubTitle text={titleText} />
      <WeatherInfo cityName={cityName} />
    </div>
  );
}

export default CurrentWeather;