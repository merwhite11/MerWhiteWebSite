const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
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
        use: ['file-loader'],
      }
    ]
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  //     }
  //   }),
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
  // ]
  // devServer: {
  //   port: 3001,
  //   watchContentBase: true
    // contentBase: path.join(__dirname, 'client','/dist'),
    // hot: true,
    // overlay: true,
    // historyApiFallback: true,
    // host: process.env.HOST
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {'^/api' : ''}, // In this case we don't pass `api` path
    //   }
    // }
};