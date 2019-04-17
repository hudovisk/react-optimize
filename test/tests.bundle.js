import "./setup";

// require all modules ending in ".spec.js" from the
// js directory and all subdirectories
const testsContext = require.context("./specs/", true, /\.spec\.js$/);

// only re-run changed tests, or all if none changed
// https://www.npmjs.com/package/karma-webpack-with-fast-source-maps
const __karmaWebpackManifest__ = [];
let runnable = testsContext
  .keys()
  .filter(path => __karmaWebpackManifest__.indexOf(path) >= 0);

if (!runnable.length) runnable = testsContext.keys();

runnable.forEach(testsContext);
