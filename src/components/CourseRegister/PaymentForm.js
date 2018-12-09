import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const PaymentForm = () => {
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Platební údaje
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Číslo debetní karty"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Datum expirace"
            placeholer="11/22"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Poslední 3 číslice na druhé straně Vaší karty"
            fullWidth
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PaymentForm;
