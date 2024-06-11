import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({sx}) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField sx={sx}  id="outlined-basic" variant="outlined" />
    </Box>
  );
}
