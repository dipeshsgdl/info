/**
 * Exercise #5: Card board
 */

function init(){
    var submit = document.getElementsByTagName("input");
    var cards = document.getElementById("layout");
    var nrCards = cards.value;
    var row = nrCards.slice(0,1);
    var col = nrCards.slice(-1);
    submit.onclick = createCards(row,col);
}

function createCards(row, col){
    var rownr = parseInt(row);
    var colnr = parseInt(col);
    var cardboard = document.getElementById("cardboard");
    for (let i=0; i < rownr; i++){
        for(let j=0; j<colnr; j++){
            let card = document.createElement("div");
            card.classList.add("card");
            card.addEventListener("click", turn);
            cardboard.appendChild(card);
        }
         
    }
    cardboard.style.width = 114*colnr + "px";
}

function turn(){
    this.style.transform= "rotateY(180deg)";
}


window.onload = init;