   document.addEventListener('keydown', function(event) {
     if (event.shiftKey && event.key === '+') {
       console.log('+pressed!');
       addRow();
     }

     if (event.shiftKey && event.keyCode === 189) {
       console.log('- pressed!');
       deleteRow();
     }

     if (event.shiftKey && event.key === "Enter") {
      console.log("coaculate")
      calculateScore();
     }
   });