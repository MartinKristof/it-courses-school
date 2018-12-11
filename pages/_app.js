import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import NProgress from 'nprogress';
import Router from 'next/router';
import ReactGA from 'react-ga';
import Cookies from 'js-cookie';
import getPageContext from '../src/getPageContext';
import Header from '../src/layout/Header';
import Footer from '../src/layout/Footer';
import Notifier from '../src/components/Notifier';
import { isAuthenticated } from '../src/services/auth/auth';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();

    this.state = {
      isLogged: this.props.isLogged,
      notifier: { isOpen: false, message: '', variant: null },
    };
  }

  static async getInitialProps({ Component, ctx }) {
    const { req: request } = ctx;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, isLogged: isAuthenticated(request) };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    ReactGA.initialize('UA-130653602-1');

    let trackMe = true;

    if (trackMe) {
      ReactGA.pageview(document.location.pathname);
      trackMe = false;
    }

    Router.events.on('routeChangeStart', () => {
      NProgress.start();
      trackMe = true;
    });

    Router.events.on('routeChangeComplete', () => {
      NProgress.done();
      if (trackMe) {
        ReactGA.pageview(document.location.pathname);
      }
    });

    Router.events.on('routeChangeError', () => {
      NProgress.done();
    });
  }

  handleLogout = () => {
    Cookies.remove('jwt');

    this.setState({ isLogged: false });
    this.showNotifier('Odhlášení se podařilo', 'info');

    Router.replace('/');
  };

  handleLogin = () => {
    Cookies.set('jwt', new Date().toString());

    this.setState({ isLogged: true });
  };

  showNotifier = (messageText, variant) => {
    if (!this.state.notifier.isOpen) {
      this.setState({
        notifier: { isOpen: true, message: messageText, variant },
      });
    }
  };

  handleCloseNotifier = () => {
    this.setState({ notifier: { isOpen: false } });
  };

  render() {
    const { Component, pageProps } = this.props;
    const { isLogged } = this.state;

    return (
      <Container>
        <Head>
          <title>IT Kurzy</title>
        </Head>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <Header isLogged={isLogged} handleLogout={this.handleLogout} />
            <Notifier
              {...this.state.notifier}
              handleClose={this.handleCloseNotifier}
            />
            <Component
              showNotifier={this.showNotifier}
              handleLogin={this.handleLogin}
              isLogged={isLogged}
              pageContext={this.pageContext}
              {...pageProps}
            />
            <Footer />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default MyApp;
