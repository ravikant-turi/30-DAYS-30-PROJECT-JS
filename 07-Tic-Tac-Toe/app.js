const winner=document.querySelector(".winner")

let currentPlayer="X";


let array=Array(9).fill(null);


function checkWinner(){

    // if Drow

   
    

    // Row 

    if(array[0]!=null && (array[0]===array[1] && array[1]===array[2])){

        // document.write(`winner is ${currentPlayer}`)
        winner.innerText=`winner is ${currentPlayer}`


        return;
    }
    if( array[3]!=null && (array[3]===array[4] && array[4]===array[5])){
     
        // document.write(`winner is ${currentPlayer}`)
        winner.innerText=`winner is ${currentPlayer}`

        return;
    }
    if(array[6]!=null && (array[6]===array[7] && array[7]===array[8])){
    
    // document.write(`winner is ${currentPlayer}`)
         winner.innerText=`winner is ${currentPlayer}`

    return;
    }

    
    // column

    if(array[0]!=null && (array[0]===array[3] && array[3]===array[6])){
       
        // document.write(`winner is ${currentPlayer}`)
        winner.innerText=`winner is ${currentPlayer}`


        return;
    }
    if(array[1]!=null && (array[1]===array[4] && array[4]===array[7])){
      
        // document.write(`winner is ${currentPlayer}`)
        winner.innerText=`winner is ${currentPlayer}`

        return;
    }
    if(array[2]!=null && (array[2]===array[5] && array[5]===array[8])){
      
        // document.write(`winner is ${currentPlayer}`)
        winner.innerText=`winner is ${currentPlayer}`


        return;
    }

    
    // diagonal

    if(array[0]!=null && (array[0]===array[4] && array[4]===array[8])){
     
        // document.write(`winner is ${currentPlayer}`)
        winner.innerText=` winner is ${currentPlayer}`

        return;
    }
    if(array[2]!=null && (array[2]===array[4] && array[4]===array[6])){
       
        // document.write(`winner is ${currentPlayer}`)
        winner.innerText=` winner is ${currentPlayer}`

        return;
    }
    if(!array.some((e) => e ===null )){
        // document.write("Drow");
        winner.innerText=`Drow ! `
        return;
    }  
    
   
}
function handleClick(el){
    
    const id=Number(el.id);
    if(array[id]!==null){
        return;
    }
    array[id]=currentPlayer;
    el.innerText=currentPlayer;
    checkWinner()
    currentPlayer=currentPlayer=== "X" ? "O":"X";
   
}

