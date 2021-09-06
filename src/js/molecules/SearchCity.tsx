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
  return (
    <div>
      <Text onChangeText={onChangeText} />
      <ButtonEx text={buttonText} onClickButton={onEvent} />
    </div>
  );
}

export default SearchCity;