module.exports = {

  entry: "./src/js/index.js",

  output: {
    path: __dirname,
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /pixi.js/, loader: "script" },
      { test: /phaser.js/, loader: "script" },
      { test: /main.js/, loader: "script" }
    ]
  }

};
