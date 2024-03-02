const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
       test: /\.css$/,
       use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|pdf)$/,
        type: "asset/resource",
      },
      {
        test: /\.epub$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/src/docs'
            },
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert files up to 8MB to base64 strings
              name: 'fonts/[name].[hash:8].[ext]' // Output file name and path
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        PUBLIC_URL: JSON.stringify('/'),
      }
    }),
  //   new HtmlWebpackPlugin({
  //     template: 'index.html',
  //   }),
  //   new CopyWebpackPlugin({
  //     patterns: [
  //       { from: './sample.pdf' },
  //       { from: cMapsDir, to: 'cmaps/' },
  //       { from: standardFontsDir, to: 'standard_fonts/' },
  //     ],
  //   }),
  ],
  devServer: {
    historyApiFallback: true,
  //   port: 3001,
  //   watchContentBase: true
    // contentBase: path.join(__dirname, 'client','/dist'),
    // hot: true,
    // overlay: true,
    // host: process.env.HOST
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {'^/api' : ''}, // In this case we don't pass `api` path
    //   }
    }
};