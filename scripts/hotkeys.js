   document.addEventListener('keydown', function(event) {
     if (event.shiftKey && event.keyCode === 65) {
       addRow();
       console.log("adding row");
     }

     if (event.shiftKey && event.keyCode === 68) {
       deleteRow();
     }

    if (event.shiftKey && event.keyCode === 67) {
       clearTable();
     }

     if (event.shiftKey && event.key === "Enter") {
      calculateScore();
     }
   });