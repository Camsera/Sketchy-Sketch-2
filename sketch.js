const divCreation = document.querySelector(".sketch-container");
let gridNumber = Number(prompt("Enter a number for an *x* grid size"));

function createGrid(gridNumber){
    for(let i = 0; i < gridNumber*gridNumber; i++){
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        //gridElement.addEventListener("mouseover", changeColor);
        divCreation.appendChild(gridElement);
    }
}
function setGridSize(gridNumber){
    divCreation.setAttribute('style', `grid-template-columns: repeat(${gridNumber}, 2fr); grid-template-rows: repeat(${gridNumber}, 2fr);`)
 }
createGrid(gridNumber);
setGridSize(gridNumber);