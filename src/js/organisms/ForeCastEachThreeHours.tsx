import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SubTitle from '../atoms/SubTitle';
import SearchCity from '../molecules/SearchCity';
import ThreeHoursCardList from '../molecules/ThreeHoursCardList';

interface ForeCastEachThreeHoursPropsOptional {
  titleText: string;
  buttonText: string;
}

const ForeCastEachThreeHours: React.FunctionComponent<ForeCastEachThreeHoursPropsOptional> = ({titleText, buttonText}) => {
  const [cityName, setCityName] = useState("");
  const [textValue, setTextValue] = useState("");

  console.log("３画面目")

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
      <ThreeHoursCardList cityName={cityName} />
    </div>
  );
}

export default ForeCastEachThreeHours;