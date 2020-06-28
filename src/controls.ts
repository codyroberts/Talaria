//This file sets up the controls for the player

import * as Phaser from 'phaser'

function controls (scene: Phaser.Scene, player:Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body }) {
    const controls = scene.input.keyboard.createCursorKeys();

      // TODO: Cut controls out into function. CLean up function with fewer if statements.
      if(!controls.up.isDown && !controls.down.isDown && !controls.left.isDown && !controls.right.isDown){
        player.anims.play('idle', true);
      }

      if(controls.up.isDown){
        player.body.setVelocityY(-50);
        player.anims.play('walk_up', true);
      }
      else if(controls.down.isDown){
        player.body.setVelocityY(50);
        player.anims.play('walk_down', true);
      }
      else {
        player.body.setVelocityY(0);
      }

      if(controls.left.isDown){
        player.body.setVelocityX(-50);
        if(controls.down.isDown) {
          player.anims.play('walk_down', true);
        }
        else if(controls.up.isDown) {
          player.anims.play('walk_up', true)
        } 
        else {
          player.flipX = true;
          player.anims.play('walk_sideways', true);
        }
      }
      else if(controls.right.isDown){
        player.body.setVelocityX(50);
        if(controls.down.isDown) {
          player.anims.play('walk_down', true);
        }
        else if(controls.up.isDown) {
          player.anims.play('walk_up', true)
        } 
        else {
          player.flipX = false;
          player.anims.play('walk_sideways', true);
        }
      }
      else {
        player.body.setVelocityX(0);
      }
}

export default controls