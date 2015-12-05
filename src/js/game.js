var game = new Phaser.Game(800, 600);
var alpha = require("./game/states/alpha");

game.state.add('Alpha', alpha);
game.state.start('Alpha');

