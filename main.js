const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const box = 32


const ground = new Image()
// ADD IMAGE SRC HERE       



// create the snake

let snake = []

snake[0] = {
    x: 9 * box,
    y: 10 * box,
}


let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
    
}

// create the score bar
let score = 0

// draw everything on the canvas

function draw(){
    ctx.draw(ground, 0,0)
    for (let i = 0; i< snake.length; i++) {
        ctx.fillStyle = ( i == 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[])
    }

}


let game = setInterval(draw, 100)