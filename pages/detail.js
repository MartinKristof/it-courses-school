import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar/Avatar';
import Button from '@material-ui/core/Button/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import InfoIcon from '@material-ui/icons/Info';
import StarIcon from '@material-ui/icons/StarRate';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import Rating from 'react-rating';
import { withRouter } from 'next/router';
import Head from 'next/head';
import Chip from '@material-ui/core/Chip/Chip';
import Ratings from '../src/components/Ratings';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import getConfig from 'next/config';
import Hero from '../src/components/Hero';
import Gallery from '../src/components/Gallery';
import Layout from '../src/layout/Layout';
import Error from './_error';
import api from '../api/api.json';

const { publicRuntimeConfig } = getConfig();

const styles = (theme) => ({
  '@global': {
    h2: {
      ...theme.typography.h4,
    },
    p: {
      ...theme.typography.body1,
    },
    ul: {
      ...theme.typography.body1,
      paddingLeft: 40,
    },
    'ul li': {
      listStyleType: 'disclosure-closed',
    },
    ol: {
      ...theme.typography.body1,
      paddingLeft: 40,
    },
    'ol li': {
      listStyleType: 'decimal',
    },
    li: {
      ...theme.typography.body1,
      display: 'list-item',
    },
  },
  ratingBlock: {
    marginTop: theme.spacing.unit * 3,
  },
  ratingForm: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
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
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

class Detail extends Component {
  static async getInitialProps({ query }) {
    let { id } = query;

    try {
      const course = api.course[--id];

      return {
        course,
      };
    } catch (exception) {
      console.error(exception);

      return {
        course: null,
      };
    }
  }

  handleRegister = () => {
    const {
      router,
      course: { id },
    } = this.props;

    router.push(
      {
        pathname: '/course-register',
        query: { id },
      },
      `${publicRuntimeConfig.linkPrefix}/course-register/${id}`,
    );
  };

  render() {
    const { classes, isLogged, course } = this.props;

    if (!course) {
      return <Error statusCode={404} />;
    }

    const {
      title,
      description,
      images,
      price,
      duration: { value: durationValue, note: durationNote },
      lector,
      favorite,
      tags,
      content,
      summary,
      ratings,
    } = course;

    const priceLocale = `${price.toLocaleString('cs-CZ', {
      currency: 'CZK',
    })} Kč`;

    return (
      <Fragment>
        <Head>
          <title>IT Kurzy - Kurz - {title}</title>
        </Head>
        <div>
          <Hero>
            <Grid container spacing={40} justify="space-between">
              <Grid item xs={12}>
                <Typography component="h1" variant="h2" color="textPrimary">
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h2" variant="h6" color="textSecondary">
                  {description}
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Gallery images={images} />
              </Grid>
              <Grid item md={6}>
                <Grid container spacing={40}>
                  <Grid item xs={12}>
                    <div className={classes.lectorBlock}>
                      <Avatar className={classes.avatar}>
                        <img
                          src={`${publicRuntimeConfig.cdnPath}${
                            lector.avatar.path
                          }`}
                          alt="Lector"
                        />
                      </Avatar>
                      <Typography
                        component="h2"
                        variant="h4"
                        className={classes.lectorTitle}
                      >
                        {lector.name}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component="h3" variant="h4" color="primary">
                      {priceLocale}
                    </Typography>
                  </Grid>
                  {isLogged && (
                    <Grid item xs={12} sm="auto">
                      <Button variant="contained" color="secondary">
                        <StarIcon />{' '}
                        {!favorite ? 'Do oblíbených' : 'Odebrat z oblíbených'}
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
                  <Grid item xs={12}>
                    {tags.map(({ label }, index) => (
                      <Chip
                        key={`tags-${index}`}
                        label={label}
                        className={classes.chip}
                      />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Hero>
          <Layout>
            <Grid container spacing={40}>
              <Grid item md={6} lg={8}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </Grid>

              <Grid item md={6} lg={4}>
                <div>
                  <Typography component="h2" variant="h3" gutterBottom>
                    Souhrn
                  </Typography>
                  <List dense={false}>
                    <ListItem>
                      <ListItemIcon>
                        <MoneyIcon />
                      </ListItemIcon>
                      <ListItemText primary={priceLocale} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AccessTimeIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={durationValue}
                        secondary={durationNote || null}
                      />
                    </ListItem>
                    {summary.map((item, index) => (
                      <ListItem key={`summary-${index}`}>
                        <ListItemIcon>
                          <InfoIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={item.title}
                          secondary={item.note || null}
                        />
                      </ListItem>
                    ))}
                  </List>
                </div>
                <div>
                  <Grid container spacing={40} className={classes.ratingBlock}>
                    <Grid item md={8}>
                      <Typography component="h2" variant="h3" gutterBottom>
                        Hodnocení
                      </Typography>
                      {isLogged && (
                        <Fragment>
                          <div className={classes.ratingForm}>
                            <form>
                              <div className={classes.rating}>
                                <Rating />
                              </div>
                              <div className={classes.rating}>
                                <TextField
                                  multiline
                                  id="ratingText"
                                  rows={2}
                                  fullWidth
                                  rowsMax={4}
                                />
                              </div>
                              <Button type="submit" color="secondary">
                                Odeslat
                              </Button>
                            </form>
                          </div>
                          <Divider />
                        </Fragment>
                      )}
                      {ratings && <Ratings ratingItems={ratings} />}
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Layout>
        </div>
      </Fragment>
    );
  }
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  course: PropTypes.any,
};

export default withStyles(styles)(withRouter(Detail));
