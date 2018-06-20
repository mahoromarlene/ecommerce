var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fontLocal = 'file-loader?name=./src/style/fonts/[name].[ext]';
var fontConfig = fontLocal;

module.exports = {
  entry: [
    './src'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[id].js'
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
         options: {
          presets: ['react', 'es2015', 'stage-1']
        },
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath:'/'
        })
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        loader: fontConfig
      },
      {
        test: /\.(jpg|png|jpeg)$/,
        loader: 'file-loader'
      }
   ]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
