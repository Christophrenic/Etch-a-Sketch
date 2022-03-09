let amount = 100;
let size = 10;

function createDefaultGrid(amount, size) {                                 //Create 256 grid divs and append them inside gridContainer
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    document.body.appendChild(gridContainer)

    let i = 0;                    
    while (i < amount) {                                          //Take variable amount as the number of divs and append them inside gridContainer.
        const gridElements = document.createElement('div');
        gridElements.classList.add('gridDiv');
        gridContainer.appendChild(gridElements);
        i++;
    }
    const gridSelector = document.querySelectorAll('.gridContainer .gridDiv');    //Make each div listen to mouseover & mouse down and change color.
    gridSelector.forEach(gridDiv => {
        gridDiv.addEventListener('mouseover', changeColor);
        gridDiv.addEventListener('mousedown', changeColor);
        
    })
    return;
}
createDefaultGrid(amount, size);

window.addEventListener('contextmenu', function (e) {          //Disable right click menu.
    e.preventDefault();
})

document.addEventListener('mousedown' , eraser, false)
function eraser(e) {                        //Erase when right clicking.
    if (e.button == 2) {
    e.target.style.backgroundColor = 'white';
    }
} 


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

let userChangeSize = document.querySelector('.btnContainer .gridSize')
userChangeSize.addEventListener('click', gridSizeUserInput, false)

function gridSizeUserInput() {
    size = prompt('Enter grid size', 'example: an input of 40 generates a 40x40 grid. Maximum is 100')
    amount = (size * size);
    deleteOldGrid();
    createDefaultGrid(amount, size);
}

function deleteOldGrid() {
    document.querySelectorAll('.gridContainer .gridDiv').forEach(e => e.remove()); //Iterate through grid and delete elements.
    document.querySelector('.gridContainer').remove(); 
}

