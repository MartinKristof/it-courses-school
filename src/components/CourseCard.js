import React from 'react';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import CardActions from '@material-ui/core/CardActions/CardActions';
import Button from '@material-ui/core/Button/Button';
import Card from '@material-ui/core/Card/Card';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'next/router';
import Link from 'next/link';

const styles = (theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    cursor: 'pointer',
  },
});

class CourseCard extends React.PureComponent {
  handleClick = (query) => (event) => {
    const { router, title } = this.props;

    router.push({ pathname: '/detail', query: { name: title } });
    router.push(query);
  };

  handleClickRemove = () => {
    const { router } = this.props;

    //showNotifier('Kurz byl odebrán z oblíbených', 'success');

    router.push({ pathname: '/' });
  };

  render() {
    const { classes, isLogged, title, perex, favorite } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="/static/images/rsz_coding-924920_1920.jpg"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Link href={{ pathname: '/detail', query: { name: title } }} prefetch>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {title}
            </Typography>
          </Link>
          <Typography>{perex}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={this.handleClick({
              pathname: '/course-register',
              query: { name: title },
            })}
          >
            Koupit
          </Button>
          {isLogged && favorite ? (
            <Button
              size="small"
              color="secondary"
              onClick={this.handleClickRemove}
            >
              Odebrat z oblíbených
            </Button>
          ) : (
            <Button
              size="small"
              color="secondary"
              onClick={this.handleClick({
                pathname: '/detail',
                query: { name: title },
              })}
            >
              Podrobnosti
            </Button>
          )}
          }
        </CardActions>
      </Card>
    );
  }
}

CourseCard.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  favorite: PropTypes.bool.isRequired,
};

export default withStyles(styles)(withRouter(CourseCard));
