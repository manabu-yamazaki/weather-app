import React from 'react';

import Button from '@material-ui/core/Button';

interface ButtonProps {
  text: string;
  onClickButton: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const ButtonEx: React.FunctionComponent<ButtonProps> = ({text, onClickButton}) => {
  return (
    <Button variant="contained" color="primary" className="searchButton" onClick={onClickButton}>{text}</Button>
  );
}

export default ButtonEx;