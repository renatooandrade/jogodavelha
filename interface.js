document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    squares.forEach((square)=>{
        square.addEventListener('mouseover',mouseover);
    })

    squares.forEach((square)=>{
        square.addEventListener('mouseout',mouseout);
    })

})

function handleClick(event) {
    let resultado = document.getElementById("resultado")

    console.log(event.target)

    let square = event.target;
    let position = square.id; 


    if (handleMove(position)) {
        setTimeout(() => {
            resultado.innerHTML = `<h2>O Jogo Acabou, o vencedor foi o Jogador nº ${playerTime}</h2>`
            // alert(`O Jogo Acabou, o vencedor foi o Jogador nº ${playerTime}`);
        },20);
    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}


function mouseover(event){
    let square = event.target 
    square.style.backgroundColor = "gray"   
}

function mouseout(event){
    let square = event.target 
    square.style.backgroundColor = "beige"   
}

