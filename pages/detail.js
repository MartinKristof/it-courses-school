import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Button from '@material-ui/core/Button/Button';
import BatteryUnknownIcon from '@material-ui/icons/BatteryUnknown';
import StarIcon from '@material-ui/icons/StarRate';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import Rating from 'react-rating';
import { withRouter } from 'next/router';
import Hero from '../src/components/Hero';
import Gallery from '../src/components/Gallery';
import { generate } from '../src/services/ElementsGenerator';
import Layout from '../src/layout/Layout';
import Head from 'next/head';

const styles = (theme) => ({
  ratingBlock: {
    marginTop: theme.spacing.unit * 3,
  },
  rating: {
    marginBottom: theme.spacing.unit * 3,
  },
  avatar: {
    display: 'inline-flex',
    marginRight: theme.spacing.unit * 3,
  },
  lectorBlock: {
    display: 'flex',
  },
  lectorTitle: {
    display: 'inline-flex',
  },
});

class Detail extends React.Component {
  handleRegister = () => {
    const { router } = this.props;

    router.push({
      pathname: '/course-register',
      query: { name: 'kurz-java-1' },
    });
  };

  render() {
    const { classes, isLogged } = this.props;
    const title = 'Kurz v Javě';

    return (
      <Fragment>
        <Head>
          <title>IT Kurzy - Kurz - {title}</title>
        </Head>
        <main>
          <Hero>
            <Grid container spacing={40} justify="space-between">
              <Grid item xs={12}>
                <Typography component="h1" variant="h2" color="textPrimary">
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h2" variant="h6" color="textSecondary">
                  Kurz programování v Javě pro nováčky
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Gallery />
              </Grid>
              <Grid item md={6}>
                <Grid container spacing={40}>
                  <Grid item xs={12}>
                    <div className={classes.lectorBlock}>
                      <Avatar className={classes.avatar}>
                        <img src="https://via.placeholder.com/150" />
                      </Avatar>
                      <Typography
                        component="h2"
                        variant="h4"
                        className={classes.lectorTitle}
                      >
                        Petr Pišinger
                      </Typography>
                    </div>
                  </Grid>
                  {isLogged && (
                    <Grid item xs={12} sm="auto">
                      <Button variant="contained" color="secondary">
                        <StarIcon /> Do oblíbených
                      </Button>
                    </Grid>
                  )}
                  <Grid item xs={12} sm="auto">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={this.handleRegister}
                    >
                      Koupit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Hero>
          <Layout>
            <Grid container spacing={40}>
              <Grid item md={8}>
                <Typography component="h2" variant="h3" gutterBottom>
                  O tomto kurzu
                </Typography>
                <Typography component="p" paragraph>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Etiam quis quam. Nullam sit amet magna in magna gravida
                  vehicula. Morbi imperdiet, mauris ac auctor dictum, nisl
                  ligula egestas nulla, et sollicitudin sem purus in lacus. Nam
                  sed tellus id magna elementum tincidunt. Praesent dapibus.
                  Vestibulum fermentum tortor id mi. Proin mattis lacinia justo.
                  Nulla pulvinar eleifend sem. Cras pede libero, dapibus nec,
                  pretium sit amet, tempor quis. Vestibulum erat nulla,
                  ullamcorper nec, rutrum non, nonummy ac, erat. Mauris dolor
                  felis, sagittis at, luctus sed, aliquam non, tellus.
                </Typography>

                <Typography component="p" paragraph>
                  Nam sed tellus id magna elementum tincidunt. Phasellus et
                  lorem id felis nonummy placerat. Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur? Nam libero tempore, cum soluta nobis
                  est eligendi optio cumque nihil impedit quo minus id quod
                  maxime placeat facere possimus, omnis voluptas assumenda est,
                  omnis dolor repellendus. Integer malesuada. Mauris metus.
                  Nulla non lectus sed nisl molestie malesuada. Nulla non arcu
                  lacinia neque faucibus fringilla. Nullam lectus justo,
                  vulputate eget mollis sed, tempor sed magna. Fusce nibh.
                  Curabitur sagittis hendrerit ante. Mauris dictum facilisis
                  augue. Curabitur bibendum justo non orci. Integer vulputate
                  sem a nibh rutrum consequat. Aliquam erat volutpat. Etiam
                  commodo dui eget wisi. Nam quis nulla.
                </Typography>

                <Typography component="p" paragraph>
                  Pellentesque sapien. Temporibus autem quibusdam et aut
                  officiis debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae. Sed
                  elit dui, pellentesque a, faucibus vel, interdum nec, diam.
                  Proin pede metus, vulputate nec, fermentum fringilla, vehicula
                  vitae, justo. Integer imperdiet lectus quis justo. Donec quis
                  nibh at felis congue commodo. Etiam quis quam. In sem justo,
                  commodo ut, suscipit at, pharetra vitae, orci. Quisque
                  tincidunt scelerisque libero. Curabitur sagittis hendrerit
                  ante. Sed ac dolor sit amet purus malesuada congue. Mauris
                  suscipit, ligula sit amet pharetra semper, nibh ante cursus
                  purus, vel sagittis velit mauris vel metus.
                </Typography>
              </Grid>

              <Grid item md={4}>
                <div>
                  <Typography component="h2" variant="h3" gutterBottom>
                    Souhrn
                  </Typography>
                  <List dense={false}>
                    {generate(
                      <ListItem>
                        <ListItemIcon>
                          <BatteryUnknownIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Single-line item"
                          secondary={'Secondary text'}
                        />
                      </ListItem>,
                      5,
                    )}
                  </List>
                </div>
                <div>
                  <Grid container spacing={40} className={classes.ratingBlock}>
                    <Grid item md={8}>
                      <Typography component="h2" variant="h3" gutterBottom>
                        Hodnocení
                      </Typography>
                      <div className={classes.rating}>
                        <Rating readonly={!isLogged} />
                      </div>
                      <Typography component="p" paragraph>
                        Mauris suscipit, ligula sit amet pharetra semper, nibh
                        ante cursus purus, vel sagittis velit mauris vel metus.
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Layout>
        </main>
      </Fragment>
    );
  }
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default withStyles(styles)(withRouter(Detail));
