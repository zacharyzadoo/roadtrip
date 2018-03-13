var car = document.getElementById('car');
var fromLeft = window.pageXOffset;

//when user is scrolling update the var fromTop and make decisions to change things on the page
window.onscroll = function() {
  //when the user scrolls do all this...
  fromLeft = window.pageXOffset;

  car.style.left = 500 + fromLeft + "px";
  console.log(fromLeft); //remove later
  if (fromLeft > 0) {
    car.style.backgroundImage = "url(img/car.png)";
  } else {
    car.style.backgroundImage = "url(img/car.png)";
  }
}
