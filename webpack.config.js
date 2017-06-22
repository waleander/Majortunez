const path = require('path');

module.exports = {
  devtool: "cheap-eval-source-map",
  entry:{
    main: [
      './src/main.js'
    ]
  },
  output: {
    filename: './public/[name].js'
  },
  module: {
  loaders: [
    {
      test: /\.jsx$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: "babel-loader" // or "babel" because webpack adds the '-loader' automatically
    }
  ]
}

}
