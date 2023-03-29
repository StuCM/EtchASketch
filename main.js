const grid = document.getElementById("grid");
createGrid(16, 16);

function createGrid(rows, columns) {
    
    for(c = 0; c < rows * columns; c++) {
        grid.style.setProperty("--grid-cols", columns)
        grid.style.setProperty("--grid-rows", rows)
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "grid-item";
    }
}