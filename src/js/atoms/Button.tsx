import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({text}) => {
  return (
    <button onClick={() => console.log("Button.click")}>{text}</button>
  );
}

export default Button;