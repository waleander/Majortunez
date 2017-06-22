const path = require('path');
const webpack = require('webpack');

module.exports =  {
  devtool: "cheap-module-source-map",
  entry:{
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '/public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: 'babel-loader'
    }
  ]
}

}
