import React from 'react';

import TextField from '@material-ui/core/TextField';

interface TextProps {
  onChangeText: Function;
}

const Text: React.FunctionComponent<TextProps> = ({onChangeText}) => {
  return (
    <TextField label="City" variant="outlined" className="cityName" onChange={(event) => onChangeText(event)} />
  );
}

export default Text;