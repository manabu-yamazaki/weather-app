import React, { useState } from 'react';
import SubTitle from "../atoms/SubTitle";
import WeatherInfo from "../atoms/WeatherInfo";
import SearchCity from "../molecules/SearchCity";

interface CurrentWeatherPropsOptional {
  titleText: string;
  buttonText: string;
}

const CurrentWeather: React.FunctionComponent<CurrentWeatherPropsOptional> = ({titleText, buttonText}) => {
  const [cityName, setCityName] = useState("");
  const [textValue, setTextValue] = useState("");

  const searchWeather = () => {
    setCityName(textValue);
  }

  const handleChange = (event) => {
    setTextValue(event.target.value);
  }

  return (
    <div>
      <SearchCity buttonText={buttonText} onChangeText={handleChange} onEvent={searchWeather} />
      <SubTitle text={titleText} />
      <WeatherInfo cityName={cityName} />
    </div>
  );
}

export default CurrentWeather;