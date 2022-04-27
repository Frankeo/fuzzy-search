const path = require("path");
const TSLintPlugin = require("tslint-webpack-plugin");

module.exports = [
  {
    target: "web",
    mode: "production",
    entry: "./src/main.ts",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
      ],
    },
    resolve: {
      extensions: [".ts"],
    },
    plugins: [new TSLintPlugin({ files: "./src/**/*.ts" })],
  },
];
