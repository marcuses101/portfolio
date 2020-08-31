const heading = document.querySelector(".title");
window.addEventListener("mousemove",handleMouseMove)
const walk = 2;
let hue = 0;
function handleMouseMove (event) {
hue += 0.1;
if (hue >= 360) {
  hue = 0;
}
let x = (window.innerWidth/2 - event.clientX)/(window.innerWidth/2)*walk;
updateShadow(heading, x, 1.5, hue)

}

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function updateShadow (element, x, y, hue){
  element.style.textShadow = `${x}px ${y}px var(--shadow-main)`
}