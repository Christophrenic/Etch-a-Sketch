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

let mouseDown = false                                       //Create mouseDown boolean of the mousedown event
document.body.onmousedown = ()=>(mouseDown = true)
document.body.onmouseup = ()=>(mouseDown = false)

function changeColor (e) {
    if (e.type === 'mouseover' && !mouseDown) {      //Boolean used instead of 'mousedown' as it is compatible with bang.
        return;
} else {
    e.target.style.backgroundColor = 'black';
    }
}
const gridSelector = document.querySelectorAll('.gridContainer .gridDiv');
    gridSelector.forEach(gridDiv => {
        gridDiv.addEventListener('mouseover', changeColor);
        gridDiv.addEventListener('mousedown', changeColor);

    })
