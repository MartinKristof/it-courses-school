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

const enhancedWithAuth = (AuthComponent) =>
  class Authenticated extends React.PureComponent {
    componentDidMount() {
      const { isLogged } = this.props;

      if (!isLogged) {
        Router.replace('/login');
      }
    }

    render() {
      return !this.props.isLogged ? (
        <span>
          <CircularProgress style={styles.progress} />
        </span>
      ) : (
        <AuthComponent {...this.props} />
      );
    }
  };

export default enhancedWithAuth;
