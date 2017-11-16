const webpack = require('webpack');
const myEnv = require('dotenv').config();

const config = {
  entry: './main.js', // entry point
  output: {
    filename: 'index.js', // place where bundled app will be served
  },
  devServer: {
    inline: true,
    port: 3000,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'eslint-loader',
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.json"
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(myEnv.parsed.API_KEY),
      API_URL: JSON.stringify(myEnv.parsed.API_URL),
      FIREBASE_API_KEY: JSON.stringify(myEnv.parsed.FIREBASE_API_KEY),
      AUTH_DOMAIN: JSON.stringify(myEnv.parsed.AUTH_DOMAIN),
      DATABASE_URL: JSON.stringify(myEnv.parsed.DATABASE_URL),
    }),
  ],
};

module.exports = config;
