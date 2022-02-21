function initGrid() {
    // collect colors in an array
    let colors = [];
    let range = ["00", "33", "66", "99", "cc", "ff"];

    for (let r = 0; r < range.length; r++) {
        for (let g = 0; g < range.length; g++) {
            for (let b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    for (let i=0; i<colors.length; i++){
        var colorBlock = document.createElement("div");
        colorBlock.classList.add("choice");
        colorBlock.style.backgroundColor = colors[i];
        var palette = document.getElementById("colors");
        palette.appendChild(colorBlock);
        colorBlock.addEventListener("click", displayer);
    }

}

function displayer(){
    var color = this.style.backgroundColor;
    var selected = document.getElementById("selected");
    selected.style.backgroundColor = color;
    selected.innerHTML = color;

}

window.onload = function () {
    initGrid();
}
