import React from 'react';
import { Link } from 'react-router-dom';

import ErrorMessage from '../atoms/ErrorMessage';
import SubTitle from '../atoms/SubTitle';
import SearchCity from '../molecules/SearchCity';
import ThreeHoursCardList from '../molecules/ThreeHoursCardList';

interface ThreeHoursResultProps {
  titleText: string;
  buttonText: string;
  weatherData: any;
  onChangeText: Function;
  onEvent: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  ErrorMessageText: string;
}

const ThreeHoursResult: React.FunctionComponent<ThreeHoursResultProps> = ({titleText, buttonText, weatherData, onChangeText, onEvent, ErrorMessageText}) => {
  return (
    <div>
      <Link to="/">Empty</Link>
      <SearchCity buttonText={buttonText} onChangeText={onChangeText} onEvent={onEvent} />
      <SubTitle text={titleText} />
      <ThreeHoursCardList weatherData={weatherData} />
      <ErrorMessage text={ErrorMessageText} />
    </div>
  );
}

export default ThreeHoursResult;