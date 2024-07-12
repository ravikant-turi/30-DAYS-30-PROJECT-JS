
const btn1=document.querySelector("#btn1")
const btn2=document.querySelector("#btn2")
const btn3=document.querySelector("#btn3")
const btn4=document.querySelector("#btn4")
const btn5=document.querySelector("#btn5")
const btn6=document.querySelector("#btn6")
const btn7=document.querySelector("#btn7")
const btn8=document.querySelector("#btn8")

const btnAll=document.querySelectorAll(".btn")
const winnerPlayer=document.querySelector(".winner");
const turnPlayer=document.querySelector(".turn")

var turn="x"


function checkWinner(){
    
    //  check for row 
    if(btnAll[0].innerText===btnAll[1].innerText && btnAll[1].innerText===btnAll[2].innerText){
        winnerPlayer.innerText="winner is : "+ btnAll[0].innerText;
        console.log("winner : " + winnerPlayer.innerText)
        return;
    }
    
    if(btnAll[3].innerText===btnAll[4].innerText && btnAll[4].innerText===btnAll[5].innerText){
        winnerPlayer.innerText="winner is : "+btnAll[4].innerText;
        console.log("winner : " + winnerPlayer.innerText)
        return;
    }
    
    if(btnAll[6].innerText===btnAll[7].innerText&&btnAll[7].innerText===btnAll[8].innerText){
        winnerPlayer.innerText="winner is : "+btnAll[6].innerText;
        console.log("winner : " + winnerPlayer.innerText)
        return;
    }
    
    // check for column
    
    if(btnAll[0].innerText===btnAll[3].innerText&&btnAll[3].innerText===btnAll[6].innerText){
        winnerPlayer.innerText="winner is : "+btnAll[0].innerText;
        console.log("winner : " + winnerPlayer.innerText)
        return;
    }
    
    if(btnAll[4].innerText===btnAll[1].innerText&& btnAll[1].innerText===btnAll[7].innerText){
        winnerPlayer.innerText="winner is : "+btnAll[4].innerText;
        console.log("winner : " + winnerPlayer.innerText)
        return;
    }
    
    if(btnAll[2].innerText===btnAll[5].innerText &&btnAll[5].innerText===btnAll[8].innerText){
        winnerPlayer.innerText="winner is : "+btnAll[2].innerText;
        console.log("winner : " + winnerPlayer.innerText)
        return;
    }
    
    
    //  check for diagonal
    
    if(btnAll[0].innerText===btnAll[4].innerText &&btnAll[5].innerText===btnAll[4].innerText){
        winnerPlayer.innerText="winner is : "+btnAll[0].innerText;
        console.log("winner : " + winnerPlayer.innerText)
        return;
    }
    if(btnAll[2].innerText===btnAll[4].innerText &&btnAll[4].innerText===btnAll[6].innerText){
        winnerPlayer.innerText="winner is : "+btnAll[2].innerText;
        console.log("winner : " + winnerPlayer.innerText)
        return;
    }
    
    
    
}
function playerTurn(e,turn){
  
   if(turn==="x"){
    turn="o";
   }
   else{
    turn="x"
   }
    e.innerText=turn;
    console.log(turn)
    
}

function change(e,btn){
    console.log(e.target.innerText)
    const innerText=e.target.innerText==="o"?"x":"o";
    e.target.innerText=innerText;
    console.log("turn "+ turn)
}

