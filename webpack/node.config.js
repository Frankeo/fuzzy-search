const path = require("path");

module.exports = () => ({
  target: "node",
  output: {
    path: path.join(__basedir, "lib"),
    filename: "main.js",
  }
});