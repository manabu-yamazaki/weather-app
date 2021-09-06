import React from 'react';

import Footer from '../atoms/Footer';
import Header from '../atoms/Header';
import CurrentWeatherResult from '../organisms/CurrentWeatherResult';

interface CurrentWeatherTemplateProps {
  appText: string;
  titleText: string;
  buttonText: string;
  weatherData: any;
  onChangeText: Function;
  onEvent: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  ErrorMessageText: string;
}

const CurrentWeatherTemplate: React.FunctionComponent<CurrentWeatherTemplateProps> = ({appText, titleText, buttonText, weatherData, onChangeText, onEvent, ErrorMessageText}) => (
  <div>
    <Header titleText={appText} />
    <CurrentWeatherResult titleText={titleText} buttonText={buttonText} weatherData={weatherData} onChangeText={onChangeText} onEvent={onEvent} ErrorMessageText={ErrorMessageText} />
    <Footer titleText={appText} />
  </div>
)

export default CurrentWeatherTemplate;