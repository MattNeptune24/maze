const character = document.getElementById("character")
let x = 50;
let y = 50;
let vx= 0;
let vy = 0;

function update(){
    character.getContext('2d').clearRect(0,0,character.clientWidth,character.height)
    character.getContext('2d').fillStyle = "rgb(100,100,100)"
    x += vx
    y += vy
    character.getContext('2d').fillRect(x,y,30,30)
    requestAnimationFrame(update)
}

update()

const tileW = 45;
const tileH = 45;
const gridRows = 15;
const gridColumns = 15;

const canvas0 = document.getElementById('level0').getContext('2d');
var colorA1 = "rgb(100,100,100)"
var colorA2 = "rgb(75,75,75)"
var colorA7 = "rgb(150,150,150)"
const map0 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,
    0,4,0,4,0,7,0,0,7,4,0,4,0,4,0,
    4,0,4,0,4,0,4,0,0,0,7,0,4,0,4,
    0,2,7,0,0,7,0,4,0,4,0,4,0,3,0,
    4,0,4,0,4,0,4,0,4,0,7,0,7,0,4,
    0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,
    4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas1 = document.getElementById('level1').getContext('2d');
var colorB1 = "rgb(175,175,175)"
var colorB2 = "rgb(150,150,150)"
var colorB7 = "rgb(200,200,200)"
const map1 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,4,0,4,0,4,0,4,0,4,0,0,0,
    0,0,0,0,0,4,0,4,0,4,0,4,0,0,0,
    0,0,0,4,0,4,0,0,0,4,0,4,0,0,0,
    0,2,0,4,0,0,0,4,0,4,0,4,0,3,0,
    0,0,0,4,0,4,0,4,0,4,0,0,0,0,0,
    0,0,0,4,0,4,0,4,0,0,0,4,0,0,0,
    0,0,0,4,0,4,0,4,0,4,0,4,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas2 = document.getElementById('level2').getContext('2d');
var colorC1 = "rgb(100,100,100)"
var colorC2 = "rgb(75,75,75)"
var colorC7 = "rgb(150,150,150)"
const map2 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,
    0,4,0,4,0,7,0,0,7,4,0,4,0,4,0,
    4,0,4,0,4,0,4,0,0,0,7,0,4,0,4,
    0,2,7,0,0,7,0,4,0,4,0,4,0,3,0,
    4,0,4,0,4,0,4,0,4,0,7,0,7,0,4,
    0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,
    4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas3 = document.getElementById('level3').getContext('2d');
var colorD1 = "rgb(175,175,175)"
var colorD2 = "rgb(150,150,150)"
var colorD7 = "rgb(200,200,200)"
const map3 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,2,0,4,0,0,0,0,0,0,0,0,0,6,0,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas03 = document.getElementById('level03').getContext('2d');
const map03 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,6,0,4,0,0,0,0,0,0,0,0,0,6,0,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas003 = document.getElementById('level003').getContext('2d');
const map003 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,6,0,4,0,0,0,0,0,0,0,0,0,6,0,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,4,0,0,4,4,4,4,4,4,4,4,4,
    0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas0003 = document.getElementById('level0003').getContext('2d');
const map0003 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,4,4,5,0,4,4,4,4,4,4,4,4,4,
    0,0,4,4,5,0,4,4,4,4,4,4,4,4,4,
    0,0,4,4,5,0,4,4,4,4,4,4,4,4,4,
    0,3,0,0,5,0,0,0,0,0,0,0,0,6,0,
    0,0,4,4,5,0,4,4,4,4,4,4,4,4,4,
    0,0,4,4,5,0,4,4,4,4,4,4,4,4,4,
    0,0,4,4,5,0,4,4,4,4,4,4,4,4,4,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const updateAll = () =>{
    createMap(map0,canvas0,colorA1,colorA2,colorA7);
    createMap(map1,canvas1,colorB1,colorB2,colorB7);
    createMap(map2,canvas2,colorC1,colorC2,colorC7);
    createMap(map3,canvas3,colorD1,colorD2,colorD7);
    createMap(map03,canvas03,colorD1,colorD2,colorD7);
    createMap(map003,canvas003,colorD1,colorD2,colorD7);
    createMap(map0003,canvas0003,colorD1,colorD2,colorD7);
}

window.onload = () => {
    window. requestAnimationFrame(updateAll);
}

const createMap = (map,canvas,color1,color2,color7) => {
    for (let eachRow = 0; eachRow < gridRows; eachRow++) {
        for(let eachColumn = 0; eachColumn < gridColumns; eachColumn++) {
            let arrayIndex = eachRow * gridRows + eachColumn;
            if(map[arrayIndex] === 0) {
                canvas.fillStyle = color1
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 1) {
                canvas.fillStyle = color2
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 2) {
                canvas.fillStyle = "rgb(125,225,125)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 3) {
                canvas.fillStyle = "rgb(225,125,125)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 4) {
                canvas.fillStyle = "rgb(225,150,100)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 5) {
                canvas.fillStyle = "rgb(125,200,250)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 6) {
                canvas.fillStyle = "rgb(150,125,200)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 7) {
                canvas.fillStyle = color7
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
        }
    }
}
