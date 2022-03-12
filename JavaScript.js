let amount = 100;
let size = 10;

function createDefaultGrid(amount, size) {                                 //Create 256 grid divs and append them inside gridContainer
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    document.querySelector('.gridUI').appendChild(gridContainer);
    gridContainer.draggable = false;

    let i = 0;                    
    while (i < amount) {                                          //Take variable amount as the number of divs and append them inside gridContainer.
        const gridElements = document.createElement('div');
        gridElements.classList.add('gridDiv');
        gridContainer.appendChild(gridElements);

        gridContainer.addEventListener('dragstart', (e) => {     //Prevent drag & drop when using grid.
            e.preventDefault()
        })
        gridContainer.addEventListener('drop', (e) => {
            e.preventDefault()
        })
        gridElements.addEventListener('dragstart', (e) => {
            e.preventDefault()
        })
        gridElements.addEventListener('drop', (e) => {
            e.preventDefault()
        })
        i++;
    }
}
createDefaultGrid(amount, size);

function checkMode(pencil, eraser) {                              //Check if user has selected pencil or eraser and color grid black or white accordingly
    if (pencil.classList.contains('clicked')) {
        const gridSelector = document.querySelectorAll('.gridContainer .gridDiv');    //Make each div listen to mouseover & mouse down and change color.
        gridSelector.forEach(gridDiv => {
            gridDiv.addEventListener('mouseover', changeColor);
            gridDiv.addEventListener('mousedown', changeColor);
        })
            function changeColor (e) {
                if (e.type  === 'mouseover' && !mouseDown) {      //Boolean used instead of 'mousedown' as it is compatible with bang.
                    return;
                } else if (pencil.classList.contains('clicked')) {
                const color = document.getElementById('colorChoice').value;
                e.target.style.backgroundColor = `${color}`;
                }
                return;
            }

    }  else if (eraser.classList.contains('clicked')) {
        const gridSelector = document.querySelectorAll('.gridContainer .gridDiv');    //Make each div listen to mouseover & mouse down and change color.
        gridSelector.forEach(gridDiv => {
            gridDiv.addEventListener('mouseover', erase);
            gridDiv.addEventListener('mousedown', erase);
        })
            function erase(e) {
                if (e.type === 'mouseover' && !mouseDown) {
                    return;
                } else if (eraser.classList.contains('clicked')) {
                e.target.style.backgroundColor = 'white';
                }
                return;
        }
    }
}

let mouseDown = false                                       //Create mouseDown boolean of the mousedown event
document.body.onmousedown = ()=>(mouseDown = true)
document.body.onmouseup = ()=>(mouseDown = false)





const eraser = document.getElementById('eraser');          //When user clicks eraser icon, add 'clicked' class & remove 'clicked" class from pencil
eraser.addEventListener('click', addEraserClass, false)
function addEraserClass() {
    eraser.classList.add('clicked');
    pencil.classList.remove('clicked');
    checkMode(pencil, eraser);
}

const pencil = document.getElementById('pencil');         // ^ vice versa
pencil.addEventListener('click', addPencilClass, false)
function addPencilClass() {
    pencil.classList.add('clicked');
    eraser.classList.remove('clicked');
    checkMode(pencil, eraser);
}

let userChangeSize = document.querySelector('.btnContainer .gridSize')      //Listen for Change Size button click and prompt user to enter value.
userChangeSize.addEventListener('click', gridSizeUserInput, false)

function gridSizeUserInput() {
    size = prompt('Enter grid size', 'example: an input of 40 generates a 40x40 grid. Maximum is 100')
    amount = (size * size);
    deleteOldGrid();
    createDefaultGrid(amount, size);
    checkMode(pencil,eraser);
}

function deleteOldGrid() {
    document.querySelectorAll('.gridContainer .gridDiv').forEach(e => e.remove()); //Iterate through grid and delete elements.
    document.querySelector('.gridContainer').remove(); 
}

