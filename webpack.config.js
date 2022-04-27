const TSLintPlugin = require("tslint-webpack-plugin");
const { merge } = require("webpack-merge");
const targetConfig = (target) =>
  require(`./webpack/${target}.config.js`)(target);

module.exports = ({ target }) => {
  global.__basedir = __dirname;
  return merge(
    {
      mode: "production",
      entry: "./src/main.ts",
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
    targetConfig(target)
  );
};
