var path = require('path');
module.exports = {
  entry: './src/ModalMessageValidate.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'ModalMessageValidate.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  externals: ['react'],
  mode: 'production'
};