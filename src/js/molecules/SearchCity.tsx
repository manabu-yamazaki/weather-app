import React from 'react';

import ButtonEx from '../atoms/ButtonEx';
import Text from '../atoms/Text';

interface SearchCityProps {
  buttonText: string;
  onChangeText: Function;
  onEvent: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const SearchCity: React.FunctionComponent<SearchCityProps> = ({buttonText, onChangeText, onEvent}) => {

  const handleChange = (event) => {
    onChangeText(event);
  }
  
  return (
    <div>
      <Text onChangeText={handleChange} />
      <ButtonEx text={buttonText} onClickButton={onEvent} />
    </div>
  );
}

export default SearchCity;