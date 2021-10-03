import Phaser from "phaser";
import logoImg from "./assets/logo.png";

const demo = new Phaser.Scene("Demo");

const preload = function () {
  this.load.image("logo", logoImg);
};

const create = function () {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1,
  });
};

demo = {
  preload,
  create,
};

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: demo,
};

const game = new Phaser.Game(config);
