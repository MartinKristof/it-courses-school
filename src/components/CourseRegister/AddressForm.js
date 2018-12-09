import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

class AddressForm extends React.Component {
  state = {
    place: '',
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <Typography variant="h6" gutterBottom>
          Vaše údaje
        </Typography>

        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Křestní jméno"
              fullWidth
              autoComplete="fname"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Příjmení"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="email"
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="registration email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="date"
              id="date"
              name="date"
              label="Termín kurzu"
              defaultValue="2017-05-24"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel htmlFor="place">Místo kurzu</InputLabel>
              <Select
                value={this.state.place}
                autoWidth
                onChange={this.handleChange('place')}
                inputProps={{
                  name: 'place',
                  id: 'place',
                }}
              >
                <MenuItem value={1}>Adresa 1</MenuItem>
                <MenuItem value={2}>Adresa 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default AddressForm;
