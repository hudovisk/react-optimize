const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: path.resolve(__dirname, "src/index.ts"),
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "index.js",
    library: "react-optimize",
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    react: 'react',
    "prop-types": "prop-types"
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: "ts-loader"
      }
    ]
  }
};
