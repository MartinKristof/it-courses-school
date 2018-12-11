import React from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './Breadcrumb/BreadcrumbItem';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

const styles = (theme) => ({
  paper: {
    padding: theme.spacing.unit,
  },
});

let breadcrumbsItems = [{ label: 'Hlavní stránka', active: false, link: '/' }];

class Breadcrumbs extends React.PureComponent {
  handleClick = (link) => (event) => {
    const { router } = this.props;

    router.push(link);
  };

  resolveItems = () => {
    const { router } = this.props;
    const { pathname } = router;

    switch (pathname) {
      case '/detail':
        return [
          ...breadcrumbsItems,
          { label: 'Detail kurzu', active: true, link: pathname },
        ];
      case '/courses':
        return [
          ...breadcrumbsItems,
          { label: 'Všechny kurzy', active: true, link: pathname },
        ];
      case '/favorites':
        return [
          ...breadcrumbsItems,
          { label: 'Oblíbené kurzy', active: true, link: pathname },
        ];
      case '/login':
        return [
          ...breadcrumbsItems,
          { label: 'Přihlášení', active: true, link: pathname },
        ];
      case '/signin':
        return [
          ...breadcrumbsItems,
          { label: 'Registrace', active: true, link: pathname },
        ];
      case '/course-register':
        return [
          ...breadcrumbsItems,
          { label: 'Přihlášení na kurz', active: true, link: pathname },
        ];
      default:
        return [];
    }
  };

  render() {
    const { classes } = this.props;
    const items = this.resolveItems();

    return (
      <Paper className={classes.paper}>
        <Breadcrumb separatorText="›">
          {items.map(({ label, link, active }, index) => (
            <BreadcrumbItem
              key={`breadcrumbs-${index}`}
              label={label}
              onClick={this.handleClick(link)}
              active={active}
            />
          ))}
        </Breadcrumb>
      </Paper>
    );
  }
}

Breadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Breadcrumbs));
