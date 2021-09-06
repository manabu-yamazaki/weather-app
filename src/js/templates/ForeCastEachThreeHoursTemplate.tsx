import React from 'react';

import Footer from '../atoms/Footer';
import Header from '../atoms/Header';
import ThreeHoursResult from '../organisms/ThreeHoursResult';

interface ForeCastEachThreeHoursTemplateProps {
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

const ForeCastEachThreeHoursTemplate: React.FunctionComponent<ForeCastEachThreeHoursTemplateProps> = ({appText, titleText, buttonText, weatherData, onChangeText, onEvent, ErrorMessageText}) => (
  <div>
    <Header titleText={appText} />
    <ThreeHoursResult titleText={titleText} buttonText={buttonText} weatherData={weatherData} onChangeText={onChangeText} onEvent={onEvent} ErrorMessageText={ErrorMessageText}/>
    <Footer titleText={appText} />
  </div>
)

export default ForeCastEachThreeHoursTemplate;