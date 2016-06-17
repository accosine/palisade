const init = require('./init');
const preload = require('./preload');
const create = require('./create');
const update = require('./update');

function alpha(game) {
  this.spinner = null;
}

alpha.prototype = {
  init,
  preload,
  create,
  update,
};

module.exports = alpha;

