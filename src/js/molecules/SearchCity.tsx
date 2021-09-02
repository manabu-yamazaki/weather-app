import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

interface SearchCityProps {
  buttonText: string;
}

const SearchCity: React.FunctionComponent<SearchCityProps> = ({buttonText}) => {
  return (
    <div>
      <Text />
      <Button text={buttonText} />
    </div>
  );
}

export default SearchCity;