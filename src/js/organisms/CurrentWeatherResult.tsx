import React from 'react';
import { Link } from 'react-router-dom';

import ErrorMessage from '../atoms/ErrorMessage';
import SubTitle from '../atoms/SubTitle';
import WeatherInfo from '../atoms/WeatherInfo';
import SearchCity from '../molecules/SearchCity';

interface CurrentWeatherResultProps {
  titleText: string;
  buttonText: string;
  weatherData: any;
  onChangeText: Function;
  onEvent: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  ErrorMessageText: string;
}

const CurrentWeatherResult: React.FunctionComponent<CurrentWeatherResultProps> = ({titleText, buttonText, weatherData, onChangeText, onEvent, ErrorMessageText}) => {
  return (
    <div>
      <Link className="routeContainer__linkEmpty" to="/">Empty</Link>
      <SearchCity buttonText={buttonText} onChangeText={onChangeText} onEvent={onEvent} />
      <SubTitle text={titleText} />
      <WeatherInfo weatherData={weatherData} />
      <ErrorMessage text={ErrorMessageText} />
    </div>
  );
}

export default CurrentWeatherResult;