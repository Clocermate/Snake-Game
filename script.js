let board=document.querySelector(".board")
let FOODX;
let FOODY;
let snakex=5;
let snakebody=[]
let snakey=11;
let velocityX=0;
let velocityY=0;
let gameOver=false;
let setIntervalid
function randomposition(){
    FOODX=Math.floor(Math.random()*14)+1
    FOODY=Math.floor(Math.random()*14)+1
}
function movesnake(e){
if(e.key=="ArrowUp"&& velocityY!=1){
    velocityX=0
    velocityY=-1
}
else if(e.key=="ArrowDown"&& velocityY!=-1){
    velocityX=0
    velocityY=1
}
else if(e.key=="ArrowLeft"&& velocityX!=1){
    velocityX=-1
    velocityY=0
}
else if(e.key=="ArrowRight"&& velocityX!=-1){
    velocityX=1
    velocityY=0
}
main()
}
function showgameOver(){
    if(gameOver){
 clearInterval(setIntervalid)
 document.removeEventListener("keydown",movesnake)
    }
}
function main(){
    if(gameOver){return showgameOver()}
    if(snakex==FOODX&snakey==FOODY){
        randomposition()
        snakebody.push([FOODX,FOODY])
        console.log(snakebody)
    }
    for (let i = snakebody.length-1; i >0; i--) {
        snakebody[i]=snakebody[i-1]
        
    }
    let setHtml=`<div class="food" style="grid-area: ${FOODY}/${FOODX};"></div>`
    snakex+=velocityX;
    snakey+=velocityY;
    snakebody[0]=[snakex,snakey]
    for (let i = 0; i < snakebody.length; i++) {
        
        setHtml+=`<div class="snake-head" style="grid-area: ${snakebody[i][1]}/${snakebody[i][0]};"></div>`
    }
    if(snakex<=0||snakex>14||snakey>14||snakey<=0){
        gameOver=true;
    }
   


board.innerHTML=setHtml
}
randomposition()
main()
setIntervalid =setInterval(main,150)
document.addEventListener("keydown",movesnake)
