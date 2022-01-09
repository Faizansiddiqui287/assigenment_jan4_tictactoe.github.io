const heading = document.querySelector('.heading')
const resetButton =document.querySelector('.reset-btn') 
const gameCells = document.querySelectorAll('.cell')
const x_won = document.getElementById('x_won');
const o_won = document.getElementById('o_won');



var isXturn=true;
var count =0;

const checkGameStatus=()=>{
    const index0ClassList=gameCells[0].classList;
    const index1ClassList=gameCells[1].classList;
    const index2ClassList=gameCells[2].classList;
    const index3ClassList=gameCells[3].classList;
    const index4ClassList=gameCells[4].classList;
    const index5ClassList=gameCells[5].classList;
    const index6ClassList=gameCells[6].classList;
    const index7ClassList=gameCells[7].classList;
    const index8ClassList=gameCells[8].classList;
   

    if(index0ClassList.contains('O')){
        if(index1ClassList.contains('O') && index2ClassList.contains('O')){
            o_won.classList.add("display_showo")
            
        }
    }

    if (index0ClassList.contains('O')) {
        if (index1ClassList.contains('O') && index2ClassList.contains('O')) {
            o_won.classList.add("display_showo")

        }
    }
    if (index0ClassList.contains('X')) {
        if (index1ClassList.contains('X') && index2ClassList.contains('X')) {
            x_won.classList.add("display_showx")
        }
    }
    if (index3ClassList.contains('O')) {
        if (index4ClassList.contains('O') && index5ClassList.contains('O')) {
            o_won.classList.add("display_showo")
        }
    }
    if (index3ClassList.contains('X')) {
        if (index4ClassList.contains('X') && index5ClassList.contains('X')) {
            x_won.classList.add("display_showx")
        }
    }

    if (index6ClassList.contains('O')) {
        if (index7ClassList.contains('O') && index8ClassList.contains('O')) {
            o_won.classList.add("display_showo")
        }
    }
    if (index6ClassList.contains('X')) {
        if (index7ClassList.contains('X') && index8ClassList.contains('X')) {
            x_won.classList.add("display_showx")
        }
    }
    if (index0ClassList.contains('O')) {
        if (index3ClassList.contains('O') && index6ClassList.contains('O')) {
            o_won.classList.add("display_showo")
        }
    }
    if (index0ClassList.contains('X')) {
        if (index3ClassList.contains('X') && index6ClassList.contains('X')) {
            x_won.classList.add("display_showx")
        }
    }
    if (index1ClassList.contains('X')) {
        if (index4ClassList.contains('X') && index7ClassList.contains('X')) {
            x_won.classList.add("display_showx")
        }
    }
    if (index1ClassList.contains('O')) {
        if (index4ClassList.contains('O') && index7ClassList.contains('O')) {
            o_won.classList.add("display_showo")
        }
    }
    if (index2ClassList.contains('O')) {
        if (index5ClassList.contains('O') && index8ClassList.contains('O')) {
            o_won.classList.add("display_showo")
        }
    }
    if (index1ClassList.contains('X')) {
        if (index4ClassList.contains('X') && index7ClassList.contains('X')) {
            x_won.classList.add("display_showx")
        }
    }
    if (index0ClassList.contains('X')) {
        if (index4ClassList.contains('X') && index8ClassList.contains('X')) {
            x_won.classList.add("display_showx")
        }
    }
    if (index0ClassList.contains('O')) {
        if (index4ClassList.contains('O') && index8ClassList.contains('O')) {
            o_won.classList.add("display_showo")
        }
    }
    if (index2ClassList.contains('X')) {
        if (index4ClassList.contains('X') && index6ClassList.contains('X')) {
            x_won.classList.add("display_showx")
        }
    }
    if (index2ClassList.contains('O')) {
        if (index4ClassList.contains('O') && index6ClassList.contains('O')) {
            o_won.classList.add("display_showo")
        }
    }

}



function cellHandler(event){
   const classList= event.target.classList;
   if(classList.length>1){
       return;
   }
   if(isXturn){
        classList.add("X")
        isXturn=false;
        heading.textContent="O's turn"

   }else{
       classList.add('O')
       isXturn=true;
       heading.textContent="X's turn"
   }
   count=count+1
   console.log(count)
   if(count >=5){
       checkGameStatus()
   }
}






for(cell of gameCells){
    cell.addEventListener('click',cellHandler)
}

const resetHandler=()=>{
    window.location.reload()
}


resetButton.addEventListener('click',resetHandler)