var game = new Phaser.Game(800, 600);
var states = require('./states');

game.state.add('Alpha', states.alpha);
game.state.start('Alpha');
