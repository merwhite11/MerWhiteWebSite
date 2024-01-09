const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
    // 'pdf.worker': path.join(__dirname, './node_modules/pdfjs-dist/build/pdf.worker.min.js')
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
       use: [
        "style-loader", "css-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|pdf)$/,
        type: "asset/resource",
      },
      // {
      //   test: /\.(png|jp(e*)g|svg|gif|pdf)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'images/[hash]-[name].[ext]',
      //       },
      //     }
      //   ],
      // }
    ]
  },
  // plugins: [
  //   new webpack.NormalModuleReplacementPlugin(
  //     /^pdfjs-dist$/,
  //     resource => {
  //         resource.request = path.join(__dirname, './node_modules/pdfjs-dist/webpack');
  //     },
  // ),
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
  // ],
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