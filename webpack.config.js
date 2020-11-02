const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "react-optimize.js",
    library: "react-optimize",
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    react: 'react',
    "prop-types": "prop-types"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src/index.d.ts"),
          to: path.join(__dirname, 'lib', 'react-optimize.d.ts'),
        }
      ]
    })
  ]
};
