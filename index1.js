let myFormEl = document.getElementById("myForm")
let inputEl = document.getElementById("inputEl")

function printKeyDown(event){
    console.log(event.target)
}
inputEl.addEventListener("keydown",printKeyDown)
