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
          image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{perex}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={this.handleClick({
              pathname: '/detail',
              query: { name: title },
            })}
          >
            Podrobnosti
          </Button>
          {isLogged && !favorite && (
            <Button
              size="small"
              color="primary"
              onClick={this.handleClick({
                pathname: '/course-register',
                query: { name: title },
              })}
            >
              Přihlásit
            </Button>
          )}
          {favorite && (
            <Button
              size="small"
              color="secondary"
              onClick={this.handleClickRemove}
            >
              Odebrat z oblíbených
            </Button>
          )}
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
