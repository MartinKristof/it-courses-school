import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Router from 'next/router';

const styles = {
  progress: {
    display: 'block',
    width: '40px',
    height: '40px',
    margin: 'auto',
    marginTop: '120px',
  },
};

const enhancedWithAuth = (AuthComponent) => {
  return class Authenticated extends React.Component {
    componentDidMount() {
      const { isLogged } = this.props;

      if (!isLogged) {
        Router.replace('/login');
      }
    }

    render() {
      return !this.props.isLogged ? (
        <CircularProgress style={styles.progress} />
      ) : (
        <AuthComponent {...this.props} />
      );
    }
  };
};

export default enhancedWithAuth;
