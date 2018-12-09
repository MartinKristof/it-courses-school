import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import CourseCard from './CourseCard';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
});

const cardsDefault = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const CourseCardList = ({ classes, isLogged, cards, favorites }) => (
  <div className={classNames(classes.layout, classes.cardGrid)}>
    <Grid container spacing={40}>
      {cards.map((card) => (
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
  cards: PropTypes.array.isRequired,
  favorites: PropTypes.bool,
};

CourseCardList.defaultProps = {
  cards: cardsDefault,
  favorites: false,
};

export default withStyles(styles)(CourseCardList);
