import * as Phaser from 'phaser'
import controls from './controls'
import playerAnimation from './animations/playerAnimation';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
  };
  
  export class GameScene extends Phaser.Scene {
    private player: Phaser.Physics.Arcade.Sprite;
   
    constructor() {
      super(sceneConfig);

      this.player = null
    }

    public preload() {
      this.load.spritesheet('hero', 'assets/chara_hero.png', { frameWidth: 48, frameHeight: 48 });
      this.load.image('dungeon', 'assets/tilesets/dungeon.png');
    }
   
    public create() {
      this.player = this.physics.add.sprite(48, 48, 'hero', ) as any;
      this.player.body = this.player.body as Phaser.Physics.Arcade.Body;
      this.cameras.main.setBounds(0, 0, window.innerWidth, window.innerHeight)
      this.physics.world.setBounds(0, 0, window.innerWidth, window.innerHeight)
      this.player.body.setCollideWorldBounds(true);

      
      this.cameras.main.setZoom(2);
      this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
      this.player.setScale(2);


      // Imports animations from animations.ts
      playerAnimation(this);
    }
   
    public update() {
      // Imports game controls from controls.ts
      controls(this, this.player);
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
            debug: false,
        },
    },
    render: {
      pixelArt: true,
    },

    scene: GameScene,

    parent: 'game',
    backgroundColor: '#000000',
}

export const game = new Phaser.Game(gameConfig);
