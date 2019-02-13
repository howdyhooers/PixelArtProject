/**
 *The table element is initially empty. And will be populated with cells
 *according to user input via makeGrid function.
 *columnInput will be the width input by user.
 *rowInput will be the height input by user.
 *colorPicker allows user to choose a color to paint each cell.
 */
const table = document.getElementById('pixelCanvas');
const columnInput = document.getElementById('inputWidth');
const rowInput = document.getElementById('inputHeight');
const colorPicker = document.getElementById('colorPicker');

/**
 * @description The purpose of this function is to create
 *a grid of cells in response to a form submission, which contains
 *input of height and width from user.  When user clicks on a cell
 *the color should change according to colorPicker choice.
 */
function makeGrid() {

  const rows = parseInt(rowInput.value);
  const columns = parseInt(columnInput.value);

  table.innerHTML = "";

  for (let r = 0; r < rows; ++r) {
    const rowElement = document.createElement('tr');
    table.appendChild(rowElement);

    for (let c = 0; c < columns; ++c) {
      const dataElement = document.createElement('td');
      // handle click, set color
      function makeColor() {
        // get a new color value on each click
        // to support multi-color drawings
        const color = colorPicker.value;
        dataElement.style.backgroundColor = color;
      }
      rowElement.appendChild(dataElement);
      dataElement.addEventListener('click', makeColor);
    }
  }

}
