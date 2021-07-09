
// Create webpage with 16x16 grid
                        
let gridSize = 16;

let penState = 0;
const WHITE = "255,255,255";
const BLACK = "0,0,0";

const GRID_WIDTH = 500;
const GRID_HEIGHT = 500;
//to get the pixel size we need to divide the height/width by the gridsize to divy up the total area
let pixelSize = GRID_WIDTH / gridSize;




// Ref header container for buttons
const header = document.querySelector('header');
// Ref container for grid divs in js
const mainContainer = document.querySelector('#mainContainer');
                                
//         Create divs in js 
// acquired help for appending grid https://code-boxx.com/create-grid-javascript/
createBtnReset();
createBtnGridSize();
// createBtnActivate();
createGrid();
changeBgColorOnHover();


function createGrid() {
    // This styling needs to be adjusted whenever the grid is created, so it was
    // implemented inside this function
    mainContainer.style.cssText = `display: grid;
                                grid-template-columns: repeat(${gridSize}, ${pixelSize}px);
                                grid-template-rows: repeat(${gridSize}, ${pixelSize}px);
                                justify-content: center;
                                text-align: center;
                                width: ${GRID_WIDTH}px;
                                height: ${GRID_HEIGHT}px;`;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const pixel = document.createElement('div')
            //pixel.textContent = "P";
            pixel.classList.add('pixel');
            pixel.style.cssText = `display: relative;
                                   width: ${pixelSize}px; 
                                   height: ${pixelSize}px;
                                   border: 1px solid cyan;
                                   background-color: white;
                                   color: red;`
            pixel.id = `pixelNum${j}`;
            mainContainer.appendChild(pixel);
        }
    }
}

function changeBgColorOnHover() {
    const divArray = document.querySelectorAll('.pixel');

    // add hover affect to change divs colors
    //Add class to div when hovered over
    if (penState == 0) {
        // Change div background color with js
        styleDivBgColor(divArray,  BLACK);
    } else if (penState == 1) {
        styleDivBgColor(divArray, WHITE);
    } else if (penState == 2) {
        //let randomColor = randomColorGen();
        styleDivBgColor(divArray);
    // } else if (penState == 3) {
    //     styleDivBgColor(divArray, randomColorGen().toString())
    }
}

// Adds the button to reset the grid
function createBtnReset() {
    // Add button at top of screen 
    const btnReset = document.createElement('button');
    btnReset.innerText = "Reset Grid"

    //     button clears(resets?) current grid
    btnReset.addEventListener('click', () => {
        // button prompts user for new grid Number
        //let userNumSelection = prompt('Pick a number between 1-64');
        // limit userNUMBER to 64
        // if (userNumSelection > 64) {
        //     alert("That number is too High!~ 64 will be used instead.");
        //     gridSize = 64;
        // } else {
        //     gridSize = userNumSelection;
        // }
        mainContainer.innerHTML = "";
        // pixelSize = getPixelSize();
        //  Create new grid with users # as gridSize
        createGrid();
        changeBgColorOnHover();
    })
    
    header.appendChild(btnReset);
}

// This will prompt the user for a new number for an updated gridsize
function createBtnGridSize() {
    // Add button at top of screen 
    const btnGridSize = document.createElement('button');
    btnGridSize.innerText = "New Grid Size"

    //     button clears(resets?) current grid
    btnGridSize.addEventListener('click', () => {
        // button prompts user for new grid Number
        let userNumSelection = prompt('Pick a number between 1-64');
        // limit userNUMBER to 64
        if (userNumSelection > 64) {
            alert("That number is too High!~ 64 will be used instead.");
            gridSize = 64;
        } else {
            gridSize = userNumSelection;
        }
        mainContainer.innerHTML = "";
        pixelSize = getPixelSize();
        //  Create new grid with users # as gridSize
        createGrid();
        changeBgColorOnHover();
    })
    
    header.appendChild(btnGridSize);
}


function createBtnRandomColor() {
    const btnRandomColor = document.createElement('button');
    btnRandomColor.innerText = "Random Colors!"
    //btnRandomColor.style
    //btnRandomColor.addEventListener('mouseover', changeBgColorOnHover);
}


function getPixelSize() {
    pixelSize = GRID_WIDTH / gridSize;
    return pixelSize;
}

function randomColorGen() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let rgb = [r, g, b];
    console.log(rgb);
    return rgb;
}

function styleDivBgColor(divArray, color) {
    divArray.forEach((div) => {
        div.addEventListener('mouseover', () => {
        // if (div.style.backgroundColor == "black") {
        //     div.style.backgroundColor = "white"
        // } else {
        if (penState == 2) {
            div.style.backgroundColor = `rgb(${randomColorGen().toString()})`;
        }
            div.style.backgroundColor = `rgb(${color})`;
        // }

        })
    })
}