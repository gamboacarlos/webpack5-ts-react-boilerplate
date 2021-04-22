const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    publicPath: "",
    assetModuleFilename: "images/[hash][ext][query]"
  },
  mode: "production",
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/
      },
      {
        type: "asset/resource",
        test: /\.(png|svg|jpg|jpeg|gif)$/i
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: "url-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/images/favicon.ico"
    })
  ]
}
