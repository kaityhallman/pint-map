var config = {
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
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};

module.exports = config;
