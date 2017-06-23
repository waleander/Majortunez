const path = require('path');
const webpack = require('webpack');

module.exports =  {
  devtool: "cheap-eval-source-map",
  entry:{
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
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
        path.join(__dirname, 'src')
      ],
      loader: 'babel-loader'
    },
     {
       test: /\.s?css$/,
        loader: 'style-loader!css-loader'
     }
  ]
},
  resolve: {
     extensions: ['.js','.scss']
   },

}
