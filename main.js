var car = document.getElementById('car');
var fromLeft = window.pageXOffset;
var direction = document.getElementById('directions');
var carscroll = document.getElementById('car');
var factusa = document.getElementById('factusa');
var factgermany = document.getElementById('factgermany');
var factkorea = document.getElementById('factkorea');
var factjapan = document.getElementById('factjapan');
//when user is scrolling update the var fromTop and make decisions to change things on the page
window.onscroll = function() {
  //when the user scrolls do all this...
  fromLeft = window.pageXOffset;

  car.style.left = 775 + fromLeft + "px";
  console.log(fromLeft); //remove later
  if (fromLeft > 0) {
    car.style.backgroundImage = "url(img/car.png)";
  } else {
    car.style.backgroundImage = "url(img/car.png)";
  }
  //HIDE DIRECTIONS IF SCROLLING STARTED
  if (fromLeft > 0) {
    direction.style.opacity = 0;
  }
  if (fromLeft > 1500) {
    factusa.style.opacity = 1;
  } else {
    factusa.style.opacity = 0;
  }
  if (fromLeft > 3660) {
    factgermany.style.opacity = 1;
  }
  if (fromLeft > 6200) {
    factkorea.style.opacity = 1;
  }
  if (fromLeft > 9360) {
    factjapan.style.opacity = 1;
  }
}
//BOUNCE CAR WHEN SCROLLING
function runAnimation() {
  carscroll.classList.add("jump");
}
function stopAnimation() {
  carscroll.classList.remove("jump");
}
window.addEventListener('scroll', runAnimation);
carscroll.addEventListener("animationend", stopAnimation);
