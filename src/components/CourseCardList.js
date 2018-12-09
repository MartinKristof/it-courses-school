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

const CourseCardList = ({ classes, isLogged, count, favorites }) => (
  <div className={classes.cardGrid}>
    <Grid container spacing={40}>
      {[...Array(count).keys()].map((card) => (
        <Grid item key={card} sm={6} md={4} lg={3}>
          <CourseCard
            isLogged={isLogged}
            image=""
            title="Kurz"
            favorite={favorites}
            perex="This is a media card. You can use this section to describe the content."
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

CourseCardList.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  count: PropTypes.number,
  favorites: PropTypes.bool,
};

CourseCardList.defaultProps = {
  count: 12,
  favorites: false,
};

export default withStyles(styles)(CourseCardList);
