function createDefaultGrid() {                                 //createDefaultGrid() Creates 256 grids within gridContainer (16x16)
    const gridContainer = document.createElement('div');
        gridContainer.classList.add('gridContainer');
        document.body.appendChild(gridContainer)

    let i = 0;                    
    while (i < 255) {                                          //Create grids and append inside gridContainer
        const defaultGrid = document.createElement('div');  
        defaultGrid.classList.add('gridDiv');
        gridContainer.appendChild(defaultGrid);
        i++;
    }
    return;
}

createDefaultGrid();

