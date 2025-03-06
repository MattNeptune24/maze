addEventListener("keydown", function(e){
    if(e.code == "KeyA") vx = -4
    if(e.code == "KeyS") vy = 4
    if(e.code == "KeyW") vy = -4
    if(e.code == "KeyD") vx = 4
})

addEventListener("keyup", function(e){
    if(e.code == "KeyA") vx = 0
    if(e.code == "KeyS") vy = 0
    if(e.code == "KeyW") vy = 0
    if(e.code == "KeyD") vx = 0
})
