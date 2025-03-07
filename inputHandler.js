window.addEventListener("keydown", function(e){
    if(e.code == "KeyA" && x > 0){
        vx = -4
    }
    if(e.code == "KeyS" && y < character.height){
        vy = 4
    }
    if(e.code == "KeyW" && y > 0){
        vy = -4
    }
    if(e.code == "KeyD" && x < character.width){
        vx = 4
    }
})

window.addEventListener("keyup", function(e){
    if(e.code == "KeyA") vx = 0
    if(e.code == "KeyS") vy = 0
    if(e.code == "KeyW") vy = 0
    if(e.code == "KeyD") vx = 0
})