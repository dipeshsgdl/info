var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]];
    }

    function printConsole() {
        for (var row = 0; row < this.map.length; row++) {
            var line = "";
            for (var col = 0; col < this.map[row].length; col++) {
                line += (this.map[row][col] == 1) ? "*" : " ";
            }
            console.log(line);
        }
}

function printDisplay(id){
    parent_div = document.getElementById(id);
    parent_div.style.width = CELL_SIZE*6 + "px";
    parent_div.style.height = CELL_SIZE*5 + "px";
    parent_div.style.border = "thick solid black";
    for (var row = 0; row < this.map.length; row++) {
        for (var col = 0; col < this.map[row].length; col++) { 
            var cell = document.createElement("div");
            cell.style.width = CELL_SIZE + "px";
            cell.style.height = CELL_SIZE + "px";
            cell.style.background = (this.map[row][col] == 1)? "grey":"white";
            parent_div.appendChild.cell;   
}
}
}
/* TODO implement core labyrinth functionality here */
