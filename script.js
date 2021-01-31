function createScreen() {
    for (let i = 1; i <= 16; i++) {
        const row = document.createElement("div");
        row.id = "row" + i;
        const elementOne = document.getElementById("the-screen");
        elementOne.appendChild(row);
        for (let j = 1; j <= 16; j++) {
            const column = document.createElement("div");
            column.classList.add("column" + j);
            const elementTwo = document.getElementById("row" + i);
            elementTwo.appendChild(column);
        }

    }

}

createScreen();