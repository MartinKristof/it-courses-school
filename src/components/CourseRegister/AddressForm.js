import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl/FormControl';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';

class AddressForm extends React.Component {
  handleChange = (name) => (event) => {
    this.props.handleChange(name, event.target.value);
  };

  render() {
    const { course, user, place } = this.props;
    const { firstName, surname } = user;

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
              placeholder="Jan"
              value={firstName}
              onChange={this.handleChange('firstName')}
              fullWidth
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="surname"
              name="surname"
              placeholder="Novák"
              label="Příjmení"
              value={surname}
              onChange={this.handleChange('surname')}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="jan@novak.cz"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="date"
              id="date"
              name="date"
              label="Termín konání"
              defaultValue={new Date().toISOString().slice(0, 10)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 10,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel htmlFor="place">Místo konání</InputLabel>
              <Select
                value={place}
                autoWidth
                id="place"
                onChange={this.handleChange('place')}
                inputProps={{
                  name: 'place',
                  id: 'place',
                }}
              >
                {course.places.map(({ street, city }, index) => (
                  <MenuItem key={`places-${index}`} value={index}>
                    {`${street} ${city}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

AddressForm.propTypes = {
  course: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  place: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddressForm;
