const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { default: merge } = require("webpack-merge")
const common = require("./webpack.common")

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../dist/styles/[name].css"
    })
  ],
  module: {
    rules: [
      {
        test: /.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["./src/globalStyles"]
              }
            }
          }
        ]
      }
    ]
  }
}

module.exports = merge(common, prodConfig)
