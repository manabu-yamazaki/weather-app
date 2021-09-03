import React from 'react';

interface SubTitleProps {
  text: string;
}

const SubTitle: React.FunctionComponent<SubTitleProps> = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

export default SubTitle;