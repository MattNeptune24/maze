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

const canvas1 = document.getElementById('level1').getContext('2d');
const map1 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,2,0,0,0,0,0,0,0,0,0,0,0,3,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas2 = document.getElementById('level2').getContext('2d');
const map2 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,2,0,0,0,0,0,0,0,0,0,0,0,3,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas3 = document.getElementById('level3').getContext('2d');
const map3 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,4,0,0,5,0,0,4,0,0,0,0,
    0,0,0,0,4,0,0,5,0,0,4,0,0,0,0,
    0,0,0,0,4,0,0,5,0,0,0,0,0,0,0,
    0,2,0,0,0,0,0,5,0,0,0,0,0,3,0,
    0,0,0,0,0,0,0,5,0,0,4,0,0,0,0,
    0,0,0,0,4,0,0,5,0,0,4,0,0,0,0,
    0,0,0,0,4,0,0,5,0,0,4,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas4 = document.getElementById('level4').getContext('2d');
const map4 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,4,4,4,4,4,4,4,0,0,0,0,
    0,0,0,0,4,4,4,0,4,4,4,0,0,0,0,
    0,0,0,0,4,4,0,0,0,4,4,0,0,0,0,
    0,2,0,0,4,0,0,0,0,0,4,0,0,3,0,
    0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,
    0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,
    0,0,0,0,0,4,4,4,4,4,0,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas5 = document.getElementById('level5').getContext('2d');
const map5 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,4,0,0,4,0,0,4,0,0,0,0,
    0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,
    0,2,0,0,4,0,0,4,0,0,4,0,0,6,0,
    0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,
    0,0,0,0,4,0,0,4,0,0,4,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const canvas05 = document.getElementById('level05').getContext('2d');
const map05 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,4,0,0,4,0,0,4,0,0,0,0,
    0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,
    0,3,0,0,4,0,0,4,0,0,4,0,0,6,0,
    0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,
    0,0,0,0,4,0,0,4,0,0,4,0,0,0,0,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

const updateAll = () =>{
    createMap(map1,canvas1);
    createMap(map2,canvas2);
    createMap(map3,canvas3);
    createMap(map4,canvas4);
    createMap(map5,canvas5);
    createMap(map05,canvas05);
}

window.onload = () => {
    window. requestAnimationFrame(updateAll);
}

const createMap = (map,canvas) => {
    for (let eachRow = 0; eachRow < gridRows; eachRow++) {
        for(let eachColumn = 0; eachColumn < gridColumns; eachColumn++) {
            let arrayIndex = eachRow * gridRows + eachColumn;
            if(map[arrayIndex] === 0) {
                canvas.fillStyle = "rgb(175,175,175)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
            if(map[arrayIndex] === 1) {
                canvas.fillStyle = "rgb(150,150,150)"
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
                canvas.fillStyle = "rgb(200,200,200)"
                canvas.fillRect(tileW*eachColumn,tileH * eachRow, tileW, tileH)
            }
        }
    }
}