// Whether app is in debug mode
const isInDebugMode = process.env.DEBUG === 'true';
module.exports.isInDebugMode = isInDebugMode;

// Log to console
const log = (...args) => {
  console.log(...args); // eslint-disable-line no-console
};
module.exports.log = log;

// Log to console if debug is enabled
module.exports.debug = (...args) => {
  if (isInDebugMode) {
    log(...args);
  }
};

// Whether in dev or prod
module.exports.isProduction = process.env.NODE_ENV === 'production';
