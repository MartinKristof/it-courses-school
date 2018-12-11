import { getCookie } from './session';
import redirect from './redirect';

export const getJwt = (request) => getCookie('jwt', request);

export const isAuthenticated = (request) => !!getJwt(request);

export const redirectIfAuthenticated = ({ res: response, req: request }) => {
  if (isAuthenticated(request)) {
    redirect('/', response);

    return true;
  }
  return false;
};

export const redirectIfNotAuthenticated = ({ res: response, req: request }) => {
  if (!isAuthenticated(request)) {
    redirect('/login', response);

    return true;
  }
  return false;
};
