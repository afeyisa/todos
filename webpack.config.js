const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/listener.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
       
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use : ['file-loader'],
        
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'restaurant page',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
}