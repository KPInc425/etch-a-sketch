

                        
let gridSize = 16;
if (gridSize > 64) {
    alert("That number is too High!~");
    gridSize = 64;
}

const GRID_WIDTH = 800;
const GRID_HEIGHT = 800;
//to get the pixel size we need to divide the height/width by the gridsize to divy up the total area
let pixelSize = GRID_WIDTH / gridSize;

const mainContainer = document.querySelector('#mainContainer');
mainContainer.style.cssText = `display: grid;
                                grid-template-columns: repeat(${gridSize}, ${pixelSize}px);
                                grid-template-rows: repeat(${gridSize}, ${pixelSize}px);
                                justify-content: center;
                                text-align: center;
                                width: ${GRID_WIDTH}px;
                                height: ${GRID_HEIGHT}px;`

// Create webpage with 16x16 grid
//     Create container for grid divs in js

                                
//         Create divs in js 
// acquired help for appending grid https://code-boxx.com/create-grid-javascript/
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






//             add hover affect to change divs colors

// Add button at top of screen 
//     button clears(resets?) current grid
//     button prompts user for new grid Number
//         limit userNUMBER to 100
//     Create new grid with users NUMBERxNUMBER 




