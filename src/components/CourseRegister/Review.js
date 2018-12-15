import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

const Review = ({ classes, course, payments }) => (
  <Fragment>
    <Typography variant="h6" gutterBottom>
      Souhrn
    </Typography>
    <List disablePadding>
      <ListItem className={classes.listItem}>
        <ListItemText primary={course.title} />
        <Typography variant="body2">{course.price}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary="Celkem" />
        <Typography variant="subtitle1" className={classes.total}>
          {course.price}
        </Typography>
      </ListItem>
    </List>
    <Grid container spacing={16}>
      <Grid item container direction="column" xs={12} sm={6}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Platba
        </Typography>
        <Grid container>
          {payments.map((payment, index) => (
            <Fragment key={`${payment.name}-${index}`}>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.name}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.detail}</Typography>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Fragment>
);

Review.propTypes = {
  classes: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  payments: PropTypes.array.isRequired,
};

export default withStyles(styles)(Review);
