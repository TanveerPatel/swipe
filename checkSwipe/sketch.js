var canvas
var swipeDirection

function setup(){
    canvas=createCanvas(600,600)
}

function draw(){
    background("white")

    addEventListener("touchstart", startTouch, false);
    addEventListener("touchmove", moveTouch, false);

    fill ("red")
    textSize(30)

   
    switch(swipeDirection){
        case "left": text("you swiped left ",200,200)
        break;
    
        case "right": text("you swiped right ",200,200)
        break;
    
        case "up": text("you swiped up ",200,200)
        break;
    
        case "down": text("you swiped down ",200,200)
        break;
        
    }
}

// addEventListener("touchstart", startTouch, false);
// addEventListener("touchmove", moveTouch, false);
 
// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;
 
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
 
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
 
  if (initialY === null) {
    return;
  }
 
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
 
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
 
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left

      console.log("swiped left");
      swipeDirection="left"
    } else {
      // swiped right
      console.log("swiped right");
      swipeDirection="right"
    }  
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      console.log("swiped up");
      swipeDirection="up"
    } else {
      // swiped down
      console.log("swiped down");
      swipeDirection="down"
    }  
  }
 
  initialX = null;
  initialY = null;
   
  e.preventDefault();
};
