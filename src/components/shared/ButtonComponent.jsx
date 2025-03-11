import React from 'react';
import { Button } from '@mui/material';

const ButtonComponent = (props) => {
  return (
    <Button {...props} variant="contained">
      {props.text}
    </Button>
  );
};

export default ButtonComponent;
