import * as Phaser from 'phaser'
import controls from './controls'
import playerAnimation from './animations/player';
import enemyAnimation from './animations/enemy';
import patrolling from './AI/slime'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
  };
  
  export class GameScene extends Phaser.Scene {
    private player: Phaser.Physics.Arcade.Sprite;
    private enemy: Phaser.Physics.Arcade.Sprite;
   
    constructor() {
      super(sceneConfig);

      this.player = null
    }

    public preload() {
      this.load.spritesheet('hero', 'assets/chara_hero.png', { frameWidth: 48, frameHeight: 48 });
      this.load.spritesheet('slime', 'assets/chara_slime.png', { frameWidth: 48, frameHeight: 48 });
      this.load.image('dungeontiles', 'assets/tilesets/dungeon-image.png');
      this.load.tilemapTiledJSON('dungeonmap', 'assets/tilemaps/dungeon.json')
    }
   
    public create() {
      const map = this.make.tilemap({ key: "dungeonmap" });
      const tileset = map.addTilesetImage('dungeon', 'dungeontiles')

      const belowLayer = map.createStaticLayer("below player", tileset, 0, 0);
      const worldLayer = map.createStaticLayer("world", tileset, 0, 0);
      const aboveLayer = map.createStaticLayer("above player", tileset, 0, 0);

      worldLayer.setCollisionByProperty({ collides: true });
      this.player = this.physics.add.sprite(48, 48, 'hero', ) as any;
      this.enemy = this.physics.add.sprite(48, 48, 'slime', ) as any;
      this.player.body = this.player.body as Phaser.Physics.Arcade.Body;
      this.enemy.body = this.enemy.body as Phaser.Physics.Arcade.Body;
      this.player.setSize(16, 16)


      this.physics.add.collider(this.player, worldLayer);

      this.cameras.main.setBounds(0, 0, 240, 240)
      this.physics.world.setBounds(0, 0, 240, 240)
      this.player.body.setCollideWorldBounds(true);
      this.enemy.body.setCollideWorldBounds(true);

      
      this.cameras.main.setZoom(4);
      this.cameras.main.zoomTo(6);
      this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
      this.player.setScale(1);


      // Imports animations from animations.ts
      playerAnimation(this);
      enemyAnimation(this);
    }
   
    public update() {
      // Imports game controls from controls.ts
      controls(this, this.player);
      // patrolling(this, this.enemy);
      this.enemy.anims.play('slime_idle', true)

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
            gravity: { y: 0 },
            debug: false,
        },
    },
    render: {
      pixelArt: true,
    },

    scene: GameScene,

    parent: 'game',
    // backgroundColor: '#000000',
}

export const game = new Phaser.Game(gameConfig);
