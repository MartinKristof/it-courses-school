import Router from 'next/router';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default (target, response) => {
  if (response) {
    // If on the server, an HTTP 303 response with a "Location"
    // is used to redirect.
    response.writeHead(303, { Location: target });
    response.end();
  }
  // On the browser, next/router is used to "replace" the current
  // location for the new one, removing it from history.

  if (process.browser) {
    Router.replace(target, `${publicRuntimeConfig.linkPrefix}${target}`);
  }
};
