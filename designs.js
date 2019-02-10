// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  // get input from DOM
  const table = document.getElementById('pixelCanvas');
  const rowInput = document.getElementById('inputWidth');
  const columnInput = document.getElementById('inputHeight');
  const colorPicker = document.getElementById('colorPicker');

  const rows = parseInt(rowInput.value);
  const columns = parseInt(columnInput.value);

  // Clear any existing cells
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  // Create a <tr> for every row
  for (let r = 0; r < rows; ++r) {
    const rowElement = document.createElement('tr');
    table.appendChild(rowElement);
    // within each row create a <td> for every column
    for (let c = 0; c < columns; ++c) {
      const dataElement = document.createElement('td');
      // handle click, set color
      function makeColor() {
        // get a new color value on each click
        // to support multi-color drawings
        const colorPicker = document.getElementById('colorPicker');
        const color = colorPicker.value;
        dataElement.style.backgroundColor = color;
      }
      rowElement.appendChild(dataElement);
      dataElement.addEventListener('click', makeColor);
    }
  }

}
