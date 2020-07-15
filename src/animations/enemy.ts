import * as Phaser from 'phaser'

function enemyAnimation(scene: Phaser.Scene) {
    scene.anims.create({
        key: 'slime_idle',
        frames: scene.anims.generateFrameNumbers('slime', { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
    });

      scene.anims.create({
        key: 'slime_walk_down',
        frames: scene.anims.generateFrameNumbers('slime', {start: 8, end: 11}),
        frameRate: 5,
        repeat: -1
      })

      scene.anims.create({
        key: 'slime_walk_up',
        frames: scene.anims.generateFrameNumbers('slime', {start: 16, end: 19}),
        frameRate: 5,
        repeat: -1
      })

      scene.anims.create({
        key: 'slime_walk_sideways',
        frames: scene.anims.generateFrameNumbers('slime', {start: 12, end: 15}),
        frameRate: 5,
        repeat: -1
      })
}

export default enemyAnimation