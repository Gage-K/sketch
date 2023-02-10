const pad = document.querySelector("#pad");

function getGrid (){
    let gridArray = [];
    let gridFiller = 1;

    for (i = 0; i < 8; i++){ // iterates through rows
        for (j = 0; j < 8; j++){ // iterates through columns
            gridArray.push(gridFiller);
            gridFiller++;
        };
    };

    console.log(gridArray);
};

getGrid();