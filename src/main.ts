import * as Phaser from 'phaser'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
  };
  
  export class GameScene extends Phaser.Scene {
    private hero: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };
   
    constructor() {
      super(sceneConfig);

      this.hero = null
    }

    public preload() {
      this.load.spritesheet('hero', 'assets/chara_hero.png', { frameWidth: 16, frameHeight: 16 })
    }
   
    public create() {
      this.hero = this.add.sprite(16, 16, 'hero', ) as any;
      this.physics.add.existing(this.hero);

      this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('hero', { start: 16, end: 48 }),
        frameRate: 16,
        repeat: -1
    });
    }
   
    public update() {
      const controls = this.input.keyboard.createCursorKeys();

      if(controls.up.isDown){
        this.hero.body.setVelocityY(-500);
      }
      else if(controls.down.isDown){
        this.hero.body.setVelocityY(500);
      }
      else {
        this.hero.body.setVelocityY(0);
      }

      if(controls.left.isDown){
        this.hero.body.setVelocityX(-500);
      }
      else if(controls.right.isDown){
        this.hero.body.setVelocityX(500);
      }
      else {
        this.hero.body.setVelocityX(0);
        this.hero.anims.play('idle', true)
      }
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
