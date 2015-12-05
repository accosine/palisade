var init = require("../init");
var preload = require("../preload");
var create = require("../create");
var update = require("../update");

function alpha(game) {
  this.spinner = null;
};

alpha.prototype = {
  init: init,

  preload: preload,

  create: create,

  update: update,
};

module.exports = alpha;

