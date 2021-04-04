const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { default: merge } = require("webpack-merge")
const common = require("./webpack.common")

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks:{
      chunks: "all",
    }
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "../dist/styles/[name].css"
  })],
  module: {
    rules: [
      {
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        test: /.(css|sass|scss)$/,
      },
    ]
  }
}

module.exports = merge(common, prodConfig)