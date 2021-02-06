const resetButton = document.querySelector("#reset-button");
const theScreen = document.querySelector("#the-screen");

window.addEventListener("load", starterGridCount);
resetButton.addEventListener("click", createNewScreen);

function starterGridCount() {
    createScreen(16);
}

function createScreen(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        theScreen.appendChild(row);
        theScreen.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;

    }
    changeBoxColor();
}

function createNewScreen() {
    removeGrid();
    let newGridSize = prompt("Put in a number between 1 and 64");
    newGridSize = parseInt(newGridSize);
    if (newGridSize === undefined) {
        createNewScreen();
    } if (newGridSize < 1 || newGridSize > 64 || isNaN(newGridSize)) {
        alert("Needs to be a number between 1 and 64!")
        createNewScreen();
    } else {
        createScreen(newGridSize);
    }
}

function removeGrid() {
    const gridArray = Array.from(theScreen.childNodes);
    gridArray.forEach((element) => {
        theScreen.removeChild(element);
    });
}

function changeBoxColor() {

    document.querySelectorAll('.row').forEach(item => {
        item.addEventListener('mouseover', event => {      
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let rgb = "rgb(" + r + "," + g + "," + b + ")"
            item.style.backgroundColor = `${rgb}`;
        })
    })

}