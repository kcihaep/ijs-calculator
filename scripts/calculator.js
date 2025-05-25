function calculateScore(tableID) {

    const table = document.getElementById(tableID);
    const rows = table.rows;
    const numCols = rows[0].cells.length;
  
    const sumRow = table.insertRow(-1);
  
    for (let i = 0; i < numCols; i++) {
      let sum = 0;
      for (let j = 1; j < rows.length; j++) {
        const cellValue = parseFloat(rows[j].cells[i].textContent);
        if (!isNaN(cellValue)) {
          sum += cellValue;
        }
      }
  
      const sumCell = sumRow.insertCell(i)
      sumCell.textContent = sum;
  
    }
  }