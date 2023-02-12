const pad = document.querySelector("#pad");

function getGrid (){
    let gridArray = [];
    let gridFiller = 1;

    let rowAmt = 16;
    let cellAmt = rowAmt * rowAmt;

    pad.style.display = 'grid';
    pad.style.gridTemplateRows = `repeat(${rowAmt} 1fr)`;
    pad.style.gridTemplateColumns = `repeat(${rowAmt} 1fr)`;

    let row = 1;
    let col = 1;

    for (i = 0; i < cellAmt; i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.gridRow = row;
        cell.style.gridColumn = col;
        //cell.textContent = i;

        col += 1;
        if (col === rowAmt + 1){
            row += 1;
            col = 1;
        };

        pad.appendChild(cell);
        cell.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "red";
            
            setTimeout(() => {
                event.target.style.backgroundColor = "";
            }, 2500);
        });
    };

    //console.log(gridArray);
};

getGrid();