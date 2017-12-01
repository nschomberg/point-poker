import ReactGA from 'react-ga';
import { getUserId } from 'services/auth';
import { debug } from 'utils';

export const initGA = () => {
  const userId = getUserId();
  const gaID = process.env.GA_TRACKING_ID;
  debug(`Initializing GA (${userId} - ${gaID})`);
  ReactGA.initialize(gaID);
  ReactGA.set({ userId });
};

export const trackPageView = (pathname = window.location.pathname) => {
  debug(`Tracking page ${pathname}`);
  ReactGA.pageview(pathname);
};
