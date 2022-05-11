
// for the typing effect
var typed = new Typed(".auto-type",{
  strings: ["Hello!","Welcome :)"], //creating string of words
  typeSpeed: 75, //setting type speed
  backSpeed: 75, //setting back type speed
  // loop: true;
})

//function for redirecting after spin
var x = document.getElementById("toggle-circle");
function myFunction() {
  x.style.WebkitAnimation = "spin 3s";
}
x.addEventListener("webkitAnimationStart", myFunction)
x.addEventListener("webkitAnimationEnd", myEndFunction);
function myEndFunction() {
  window.location.href = "profile.html"
}
