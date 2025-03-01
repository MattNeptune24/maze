let time = 0
let timerDisplay = document.getElementById("timerDisplay")

var checkboxes = document.getElementsByClassName("checkbox")
var checkboxes2 = document.getElementsByClassName("checkbox2")

let random1 = 0

console.log(checkboxes)

var enabled = false

const timer = (time) => {
    setTimeout(() => {
    time = Math.round((time + 0.01) * 100) / 100
    timerDisplay.textContent = time
    if(time <= 9.99 && enabled == true){
        timer(time)
    }
    }, 10);
}

const timer2 = () => {
    setTimeout(() => {
    if(checkboxes){
        for(i=0; i < checkboxes2.length; i++){
            if(checkboxes2[i].checked){
                if(checkboxes[i].checked){
                    time = time
                }
            }else{
                checkboxes[i].checked = false
            }
        }
    }
    timer2()
    }, 500);
}

function random(){
    random1 = Math.round(Math.random() * 25)

    if(checkboxes2[random1].checked == false){
        checkboxes2[random1].checked = true
    }else{
        random()
    }
}

document.getElementById("random").onclick = random

timer2()