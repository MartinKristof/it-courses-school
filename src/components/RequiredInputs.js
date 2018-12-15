import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography/Typography';

const RequiredInputs = () => (
  <FormControl>
    <Typography>
      Pole obsahující <span style={{ color: 'red' }}>*</span> jsou povinná
    </Typography>
  </FormControl>
);

export default RequiredInputs;
