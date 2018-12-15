import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const PaymentForm = ({ cardNumber, handleChange, ccv }) => {
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
            placeholder="1234123412341234"
            value={cardNumber}
            onChange={(event) => handleChange('cardNumber', event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            type="date"
            id="date"
            name="date"
            label="Datum expirace"
            defaultValue="2017-05-01"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            placeholder="123"
            value={ccv}
            onChange={(event) => handleChange('ccv', event.target.value)}
            helperText="Poslední 3 číslice na druhé straně Vaší karty"
            fullWidth
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

PaymentForm.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  ccv: PropTypes.string.isRequired,
};

export default PaymentForm;
