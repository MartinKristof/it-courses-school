import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import Rating from 'react-rating';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  list: {
    display: 'block',
  },
  item: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
});

const ratings = [
  {
    rating: 3,
    text:
      'Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus.',
  },
  {
    rating: 2,
    text:
      'Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus.',
  },
];

const RatingItem = ({ rating, text, classes }) => (
  <GridListTile>
    <div className={classes.item}>
      <Rating readonly initialRating={rating} />
    </div>
    <Typography component="p" paragraph>
      {text}
    </Typography>
    <Divider />
  </GridListTile>
);

const Ratings = ({ classes, ratingItems }) => (
  <GridList cols={1} className={classes.list} spacing={0}>
    {ratingItems.map(({ rating, text }, index) => (
      <RatingItem
        key={`rating-${index}`}
        rating={rating}
        text={text}
        classes={classes}
      />
    ))}
  </GridList>
);

Ratings.propTypes = {
  ratingItems: PropTypes.array,
};

Ratings.defaultProps = {
  ratingItems: ratings,
};

export default withStyles(styles)(Ratings);
