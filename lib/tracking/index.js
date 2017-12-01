const ua = require('universal-analytics');

const { debug } = require('../utils');

const visitor = ua(process.env.GA_TRACKING_ID);

/**
 * Track a page view.
 * Can take different arguments (https://github.com/peaksandpies/universal-analytics#pageview-tracking)
 * Simplest is to pass in a document path (e.g. "/")
 */
module.exports.trackPageView = (...args) => {
  debug('Tracking pageview', args);

  visitor.pageview(...args)
    .send();
};

/**
 * Track an event
 * Can take different arguments (https://github.com/peaksandpies/universal-analytics#pageview-tracking)
 * Simplest is to pass in a document path (e.g. "/")
 */
module.exports.trackEvent = (...args) => {
  debug('Tracking event', args);

  visitor.pageview(...args)
    .send();
};

/**
 * Express middleware to log each request as a pageview
 */
module.exports.trackerMiddleware = (req, res, next) => {
  module.exports.trackPageView(req.url);
  next();
};
