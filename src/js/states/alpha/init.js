var minion = require('../../lib/minion');

var init = function init() {
  var box = minion.drawRect(this);
  var spinner = this.add.sprite( this.world.centerX, this.world.centerY,
      box.generateTexture());

  spinner.anchor.set(0.5);
};

module.exports = init;
