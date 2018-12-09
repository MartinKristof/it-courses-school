import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CourseCardList from '../src/components/CourseCardList';
import enhancedWithAuth from '../src/hoc/withAuth';

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

const Favorites = ({ classes, isLogged }) => (
  <Fragment>
    <main>
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Oblíbené kurzy
          </Typography>
        </div>
      </div>
    </main>
    <CourseCardList
      isLogged={isLogged}
      cards={[...Array(5).keys()]}
      favorites
    />
  </Fragment>
);

Favorites.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default withStyles(styles)(enhancedWithAuth(Favorites));
