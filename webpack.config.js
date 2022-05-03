/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/naming-convention */
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    library: "fuzzySearcher",
    globalObject: "this",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  mode: "production",
  entry: "./src/analyzer.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  plugins: [new ESLintPlugin({ files: "./src/**/*.ts" })],
};
