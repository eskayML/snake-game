import {update as updateSnake, draw as drawSnake ,SNAKE_SPEED} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {getSnakeHead, snakeIntersection} from './snake.js'
import {outsideGrid } from './grid.js'




let lastRenderTime = 0;
const gameBoard = document.getElementById('game_board')
let gameOver = false


function main(currentTime) {
    if(gameOver) {
        swal({
            title:"You lost😥",
            text: "Click OK to retry.",
            icon: "warning",
            buttons: true,
        })
        .then( window.location = '/')
    }

    
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    lastRenderTime = currentTime;

    update()
    draw()
    
}


window.requestAnimationFrame(main)


function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}



function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

