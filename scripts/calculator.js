function calculateScore() {

    var table = document.getElementById(free-skate);
    var rows = table.rows;
    var numCols = rows[0].cells.length;
  
    var sumRow = table.insertRow(-1);
  
    for (let i = 0; i < numCols; i++) {
      let sum = 0;
      for (let j = 1; j < rows.length; j++) {
        var cellValue = parseFloat(rows[j].cells[i].textContent);
        if (!isNaN(cellValue)) {
          sum += cellValue;
        }
      }
  
      var sumCell = sumRow.insertCell(i)
      sumCell.textContent = sum;
  
    }
  }