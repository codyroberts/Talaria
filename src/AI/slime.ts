import * as Phaser from 'phaser'
import enemyAnimations from '../animations/enemy'

interface action {
    move: any,
    direction?: any
    animation: any
}

function slimeBrains (scene: Phaser.Scene, enemy: Phaser.Physics.Arcade.Sprite) {

    function patrolling() {
        const body = enemy.body as Phaser.Physics.Arcade.Body
    
            const idle: action = {            
                move: body.setVelocity(0),
                animation: enemy.anims.play('slime_idle', true)}
    
            const walk_up: action = {
                move: body.setVelocityY(-45),
                animation: enemy.anims.play('slime_walk_up', true)
            }
        
    
            const walk_down: action = {
                move: body.setVelocityY(45),
                animation: enemy.anims.play('slime_walk_down', true)
            }
        
    
            const walk_left: action = {
                move: body.setVelocityX(-45),
                direction: enemy.flipX = true,
                animation: enemy.anims.play('slime_walk_sideways', true)
            }
        
    
            const walk_right: action = {
                move: body.setVelocityX(45),
                direction: enemy.flipX = false,
                animation: enemy.anims.play('slime_walk_sideways', true)
            }
    
            const moves: action[] = [idle, walk_up, walk_down, walk_left, walk_right]
    
            return moves
    }

    function moveDecoder(moves: action[]){
        moves = patrolling()
        
        
    }
}



export default slimeBrains