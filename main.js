var counter = document.getElementById('counter');
var fromLeft = window.pageYOffset;

counter.innerHTML = "counter text";

//when user is scrolling update the var fromTop and make decisions to change things on the page
window.onscroll = function() {
  //when the user scrolls do all this...
  fromLeft = window.pageXOffset;
  //test
  console.log(fromLeft);

  //Keeps the block 100 px from the left
  counter.style.left = 100 + fromLeft + "px";

  // if (fromLeft > 1000) {
  //   counter.innerHTML = "more than 1000 leagues.";
  //   counter.style.background =  "green";
  // } else {
  //   counter.innerHTML = "counter text";
  //   counter.style.background = "blue";
  // }
}
