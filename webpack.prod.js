const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry:{
    main: [
      './src/main.js'
    ],
    admin: [
      './src/admin-main.js'
    ]
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].js',
    publicPath: '/public/',
    sourceMapFilename: '[name].map'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=react,presets[]=env']
      },
        // I am using SASS as Transpiler for style sheets
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }

    ]
  }
}
