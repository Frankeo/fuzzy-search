const path = require("path");
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = [
  {
    entry: "./src/main.ts",
    mode: "development",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "main.js",
      library: "$",
      libraryTarget: "umd"
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    resolve: {
      extensions: ['.ts'],
    },
    plugins: [
      new TSLintPlugin({
        files: ['./src/**/*.ts']
      })
    ],
    node: {
      __dirname: false,
    }
  }
];
