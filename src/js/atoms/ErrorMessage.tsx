import React from 'react';

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FunctionComponent<ErrorMessageProps> = ({text}) => {
  return (
    <div>{text}</div>
  )
}

export default ErrorMessage;