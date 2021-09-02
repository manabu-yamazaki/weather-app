import React from "react";
import SubTitle from "../atoms/SubTitle";
import WeatherInfo from "../atoms/WeatherInfo";
import SearchCity from "../molecules/SearchCity";

interface CurrentWeatherProps {
  titleText: string;
  buttonText: string;
}

const CurrentWeather: React.FunctionComponent<CurrentWeatherProps> = ({titleText, buttonText}) => {
  return (
    <div>
      <SearchCity buttonText={buttonText} />
      <SubTitle text={titleText} />
      <WeatherInfo />
    </div>
  );
}

export default CurrentWeather;