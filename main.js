const grid = document.getElementById("grid");
const slider = document.getElementById("gridSize");
const sliderText = document.getElementById("sliderText");
const gridBtn = document.querySelector(".newGridBtn");
const colourCheck = document.querySelector("#colourCheck");
const shadeCheck = document.querySelector("#shadeCheck");

slider.value = 16;
sliderText.innerHTML = slider.value + ' x ' + slider.value ;
let gridManager = [];
createGrid(16, 16);

grid.addEventListener('mouseover', changeBackground)
slider.oninput = function() {
    sliderText.innerHTML = this.value + ' x ' + this.value;
}
gridBtn.addEventListener('click', () => {
    createGrid(slider.value, slider.value)
})
//document.addEventListener('click', activateCell)

function createGrid(rows, columns) {
    grid.innerHTML = "";   
    for(c = 0; c < rows * columns; c++) {
        grid.style.setProperty("--grid-cols", columns)
        grid.style.setProperty("--grid-rows", rows)
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "grid-item";
        grid.appendChild(cell).id = c;
    }
    gridManager = Array(rows*columns).fill(false)
    console.log(gridManager)
}

function changeBackground(e) {
    console.log(colourCheck.value)
    if(e.target.className !== 'grid-container') {
        if(colourCheck.checked)
        {
            const newColour = randomColor();
            e.target.style.backgroundColor = newColour;

        }
        
        else { e.target.style.backgroundColor = '#ff7800' }
        
    }   
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//additional functions
function radiate(cell, rowLength) {
        cell = parseInt(cell);
        const top = cell - rowLength;
        const bottom = cell + rowLength;
        const left = cell - 1;
        const right = cell + 1;
        const linkedCells = [ top, bottom, left, right ] //if this is true input

        for(num of linkedCells) {
            console.log(num)
            let cell = document.getElementById(num);
            setTimeout( () => {
                cell.style.backgroundColor = 'black'
            }, 200);
        }
}

function activateCell(e) {
    const cellNumber = e.target.id;
    console.log("Cell No.", cellNumber)
    radiate(cellNumber, 16)
}