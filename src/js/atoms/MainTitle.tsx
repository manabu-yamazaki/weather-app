import React from 'react';

interface MainTitleProps {
  text: string;
}

const MainTitle: React.FunctionComponent<MainTitleProps> = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

export default MainTitle;