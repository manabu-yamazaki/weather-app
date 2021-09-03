import React from 'react';

import TextField from '@material-ui/core/TextField';

interface TextProps {
  onChangeText: Function;
}

const Text: React.FunctionComponent<TextProps> = ({onChangeText}) => {

  const handleChange = (event) => {
    onChangeText(event);
  }

  return (
    <TextField label="City" variant="outlined" onChange={handleChange} />
  );
}

export default Text;