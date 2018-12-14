import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import CourseCard from './CourseCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
});

const CourseCardList = ({ classes, isLogged, courses }) => (
  <div className={classes.cardGrid}>
    <Grid container spacing={40}>
      {courses.map((course) => (
        <Grid item key={course.id} sm={6} md={4} lg={3}>
          <CourseCard isLogged={isLogged} {...course} />
        </Grid>
      ))}
    </Grid>
  </div>
);

CourseCardList.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  courses: PropTypes.array.isRequired,
};

export default withStyles(styles)(CourseCardList);
