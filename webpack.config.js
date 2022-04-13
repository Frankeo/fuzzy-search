const path = require("path");

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
    node: {
      __dirname: false,
    },
  }
];
