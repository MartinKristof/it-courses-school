import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import getConfig from 'next/config';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import RequiredInputs from '../RequiredInputs';

const { publicRuntimeConfig } = getConfig();

const styles = (theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  required: {
    marginTop: 20,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
  link: {
    marginTop: theme.spacing.unit * 3,
  },
});

const steps = ['Vaše údaje', 'Platební údaje', 'Souhrn'];

const paymentsFields = [
  { name: 'Vlastník karty', detail: '' },
  { name: 'Číslo karty', detail: '' },
  { name: 'Datum expirace', detail: '' },
];

class Checkout extends PureComponent {
  state = {
    firstName: '',
    surname: '',
    activeStep: 0,
    place: 0,
    cardNumber: '',
    ccv: '',
  };

  handleNext = (event) => {
    event.preventDefault();

    this.setState((state) => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState((state) => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  getStepContent = (step) => {
    const { firstName, surname, place, cardNumber, ccv } = this.state;
    const { course } = this.props;

    const payments = [
      ...paymentsFields,
      ...(paymentsFields[0].detail = `${firstName} ${surname}`),
      ...(paymentsFields[1].detail = cardNumber),
      ...(paymentsFields[2].detail = ccv),
    ];

    switch (step) {
      case 0:
        return (
          <AddressForm
            course={course}
            user={{ firstName, surname }}
            place={place}
            handleChange={this.handleChange}
          />
        );
      case 1:
        return (
          <PaymentForm
            cardNumber={cardNumber}
            ccv={ccv}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return <Review course={course} payments={payments} />;
      default:
        throw new Error('Unknown step');
    }
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    const orderId = Math.random()
      .toString(36)
      .substring(7);

    return (
      <Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Přihlášení na kurz
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Fragment>
                <Typography variant="h5" component="h3" gutterBottom>
                  Děkujeme za objednávku
                </Typography>
                <Typography variant="subtitle1">
                  Číslo vaší objednávky je {orderId}. Emailem Vám zašleme
                  potvrzení objednávky s dalšími informacemi k absolvování
                  kurzu.
                </Typography>
                <div className={classes.link}>
                  <Link href="/" as={`${publicRuntimeConfig.linkPrefix}/`}>
                    <a>Na hlavní stránku</a>
                  </Link>
                </div>
              </Fragment>
            ) : (
              <form onSubmit={this.handleNext}>
                {this.getStepContent(activeStep)}
                <div className={classes.required}>
                  <RequiredInputs />
                </div>
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Zpět
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Odeslat' : 'Další'}
                  </Button>
                </div>
              </form>
            )}
          </Paper>
        </div>
      </Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
