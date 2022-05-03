const path = require("path");

module.exports = () => ({
  target : "web",
  output : {
    path : path.join(__basedir, "dist"),
    filename : "bundle.js",
    library : "fuzzySearcher",
    globalObject : "this",
    libraryTarget : "umd",
    umdNamedDefine : true
  },
});
