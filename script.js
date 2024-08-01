let board=document.querySelector(".board")
let FOODX;
let FOODY;
let snakex=5;
let snakey=11;
let velocityX=0;
let velocityY=0;
function randomposition(){
    FOODX=Math.floor(Math.random()*14)+1
    FOODY=Math.floor(Math.random()*14)+1
}
function movesnake(e){
if(e.key=="ArrowUp"){
    velocityX=0
    velocityY=-1
}
else if(e.key=="ArrowDown"){
    velocityX=0
    velocityY=1
}
else if(e.key=="ArrowLeft"){
    velocityX=-1
    velocityY=0
}
else if(e.key=="ArrowRight"){
    velocityX=1
    velocityY=0
}
main()
}
function main(){
    snakex+=velocityX;
    snakey+=velocityY;
   
let setHtml=`<div class="food" style="grid-area: ${FOODY}/${FOODX};"></div>`
setHtml+=`<div class="snake-head" style="grid-area: ${snakey}/${snakex};"></div>`
board.innerHTML=setHtml
}
randomposition()
main()

document.addEventListener("keydown",movesnake)