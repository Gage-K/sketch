const pad = document.querySelector("#pad");

function getGrid (){
    let gridArray = [];
    let gridFiller = 1;

    for (i = 0; i < 16; i++){ // iterates through rows
        let row = document.createElement("div");
        pad.appendChild(row);
        for (j = 0; j < 16; j++){ // iterates through columns
            let col = document.createElement("div");
            row.appendChild(col);
            col.textContent = j; // dummy text for checking div creation
            //gridArray.push(gridFiller);
            //gridFiller++;
        };
    };

    //console.log(gridArray);
};

getGrid();