import cookie from 'js-cookie';

const getCookieFromBrowser = (key) => cookie.get(key);

const getCookieFromServer = (key, request) => {
  if (!request.headers.cookie) {
    return null;
  }
  const rawCookie = request.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return null;
  }
  return rawCookie.split('=')[1];
};

// We retrieve cookies from the browser or the server.
export const getCookie = (key, request) =>
  process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, request);
