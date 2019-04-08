var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.vue?$/,
        exclude: /(node_modules)/,
        use: "vue-loader"
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    'Access-Control-Allow-Origin': '*',
    historyApiFallback: true
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "https://desolate-chamber-87707.herokuapp.com"
      // apiUrl: "http://192.168.0.15:3030"
      // apiUrl: "http://192.168.1.10:3030"
    })
  }
};
