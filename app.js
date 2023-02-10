const pad = document.querySelector("#pad");
// problem: css-grid creates 16 rows and columns, but all divs are placed in the first row

function getGrid (){
    let gridArray = [];
    let gridFiller = 1;

    for (i = 0; i < 16; i++){ // iterates through col
        let col = document.createElement("div");
        col.classList.add("col");
        pad.appendChild(col);
        for (j = 0; j < 16; j++){ // iterates through row
            let row = document.createElement("div");
            row.classList.add("row");
            col.appendChild(row);
            row.textContent = j; // dummy text for checking div creation
            //gridArray.push(gridFiller);
            //gridFiller++;
        };
    };

    //console.log(gridArray);
};

getGrid();