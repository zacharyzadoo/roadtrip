var car = document.getElementById('car');
var fromLeft = window.pageXOffset;

//when user is scrolling update the var fromTop and make decisions to change things on the page
window.onscroll = function() {
  //when the user scrolls do all this...
  fromLeft = window.pageXOffset;

<<<<<<< HEAD
  //Keeps the block 100 px from the left
  counter.style.left = 100 + fromLeft + "px";

  // if (fromLeft > 1000) {
  //   counter.innerHTML = "more than 1000 leagues.";
  //   counter.style.background =  "green";
  // } else {
  //   counter.innerHTML = "counter text";
  //   counter.style.background = "blue";
  // }
=======
  car.style.left = 200 + fromLeft + "px";
  console.log(fromLeft);
  if (fromLeft >= 0) {
    car.style.backgroundImage = "url(img/car.png)";
  } else {
    car.style.backgroundImage = "url(img/car.png)";
  }
>>>>>>> 52dde7d9677cb92cc6568c938ddcff95f530ef93
}
