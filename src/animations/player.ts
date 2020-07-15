import * as Phaser from 'phaser'

function playerAnimation(scene: Phaser.Scene) {
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('hero', { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
    });

      scene.anims.create({
        key: 'walk_down',
        frames: scene.anims.generateFrameNumbers('hero', {start: 8, end: 11}),
        frameRate: 5,
        repeat: -1
      })

      scene.anims.create({
        key: 'walk_up',
        frames: scene.anims.generateFrameNumbers('hero', {start: 16, end: 19}),
        frameRate: 5,
        repeat: -1
      })

      scene.anims.create({
        key: 'walk_sideways',
        frames: scene.anims.generateFrameNumbers('hero', {start: 12, end: 15}),
        frameRate: 5,
        repeat: -1
      })
}

export default playerAnimation