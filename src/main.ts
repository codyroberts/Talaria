import * as Phaser from 'phaser'
import controls from './controls'
import playerAnimation from './animations/playerAnimation';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
  };
  
  export class GameScene extends Phaser.Scene {
    private player: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };
   
    constructor() {
      super(sceneConfig);

      this.player = null
    }

    public preload() {
      this.load.spritesheet('hero', 'assets/chara_hero.png', { frameWidth: 48, frameHeight: 48 })
    }
   
    public create() {
      this.player = this.add.sprite(48, 48, 'hero', ) as any;
      this.physics.add.existing(this.player);
      this.player.setScale(1.5, 1.5)

      // Imports animations from animations.ts
      playerAnimation(this);
    }
   
    public update() {
      // Imports game controls from controls.ts
      controls(this, this.player)
    }
  }

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'The Littlest Hero',

    type: Phaser.AUTO,

    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },

    scene: GameScene,

    parent: 'game',
    backgroundColor: '#000000',
}

export const game = new Phaser.Game(gameConfig);
