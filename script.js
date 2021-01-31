function createScreen() {
    
    for (let i = 1; i <= 16; i++) {
        const row = document.createElement("div");
        row.id = "row" + i;
        row.classList.add("row");
        const rowStyle = document.querySelector(".row")
        row.style.gridTemplateColumns = "repeat(16, auto)";
        const elementOne = document.getElementById("the-screen");
        elementOne.appendChild(row);
        for (let j = 1; j <= 16; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            const elementTwo = document.getElementById("row" + i);
            elementTwo.appendChild(box);
            changeBoxColor();
        }
        
    }
}


function changeBoxColor() {
    document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = "green";
        })
    })

}


createScreen();