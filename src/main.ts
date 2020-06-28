import * as Phaser from 'phaser'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
  };
  
  export class GameScene extends Phaser.Scene {
    private hero: Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };
    private isIdle = true;
   
    constructor() {
      super(sceneConfig);

      this.hero = null
    }

    public preload() {
      this.load.spritesheet('hero', 'assets/chara_hero.png', { frameWidth: 48, frameHeight: 48 })
    }
   
    public create() {
      this.hero = this.add.sprite(48, 48, 'hero', ) as any;
      this.physics.add.existing(this.hero);
      this.hero.setScale(2, 2)


      this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
    });

      this.anims.create({
        key: 'walk_down',
        frames: this.anims.generateFrameNumbers('hero', {start: 8, end: 11}),
        frameRate: 5,
        repeat: -1
      })

      this.anims.create({
        key: 'walk_up',
        frames: this.anims.generateFrameNumbers('hero', {start: 16, end: 19}),
        frameRate: 5,
        repeat: -1
      })

      this.anims.create({
        key: 'walk_sideways',
        frames: this.anims.generateFrameNumbers('hero', {start: 12, end: 15}),
        frameRate: 5,
        repeat: -1
      })
    }
   
    public update() {
      const controls = this.input.keyboard.createCursorKeys();

      // TODO: Cut controls out into function. CLean up function with fewer if statements.
      if(!controls.up.isDown && !controls.down.isDown && !controls.left.isDown && !controls.right.isDown){
        this.hero.anims.play('idle', true);
      }

      if(controls.up.isDown){
        this.hero.body.setVelocityY(-50);
        this.hero.anims.play('walk_up', true);
      }
      else if(controls.down.isDown){
        this.hero.body.setVelocityY(50);
        this.hero.anims.play('walk_down', true);
      }
      else {
        this.hero.body.setVelocityY(0);
      }

      if(controls.left.isDown){
        this.hero.body.setVelocityX(-50);
        if(controls.down.isDown) {
          this.hero.anims.play('walk_down', true);
        }
        else if(controls.up.isDown) {
          this.hero.anims.play('walk_up', true)
        } 
        else {
          this.hero.flipX = true;
          this.hero.anims.play('walk_sideways', true);
        }
      }
      else if(controls.right.isDown){
        this.hero.body.setVelocityX(50);
        if(controls.down.isDown) {
          this.hero.anims.play('walk_down', true);
        }
        else if(controls.up.isDown) {
          this.hero.anims.play('walk_up', true)
        } 
        else {
          this.hero.flipX = false;
          this.hero.anims.play('walk_sideways', true);
        }
      }
      else {
        this.hero.body.setVelocityX(0);
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
