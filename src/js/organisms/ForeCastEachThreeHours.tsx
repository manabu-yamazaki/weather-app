import React, { useState } from 'react';
import SubTitle from "../atoms/SubTitle";
import SearchCity from "../molecules/SearchCity";
import ThreeHoursCardList from "../molecules/ThreeHoursCardList";

interface ForeCastEachThreeHoursPropsOptional {
  titleText: string;
  buttonText: string;
}

const ForeCastEachThreeHours: React.FunctionComponent<ForeCastEachThreeHoursPropsOptional> = ({titleText, buttonText}) => {
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
      <ThreeHoursCardList cityName={cityName} />
    </div>
  );
}

export default ForeCastEachThreeHours;