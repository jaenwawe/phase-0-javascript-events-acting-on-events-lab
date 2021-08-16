document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
  }); 


  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
  }); 

  const dodger = document.getElementById("dodger"); 


  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 


  
  function moveDodgerRight() {
    const leftNumbers= dodger.style.left.replace("px", "");
    
    const left = parseInt(leftNumbers, 10);
    const rightNumbers = leftNumbers - dodger.style.width.replace("px", "") ;
    const rightMax =  parseInt(rightNumbers, 10);

    if (rightMax < 360 ) {
      dodger.style.left = `${left + 1}px`;
    }
  }
