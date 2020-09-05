// Added a fun mousemove shadow effect

const titles = document.querySelectorAll(".title");
const walk = 2;
let navOpen = false;

window.addEventListener("mousemove", handleMouseMove)
function handleMouseMove(event) {
  let x = (window.innerWidth / 2 - event.clientX) / (window.innerWidth / 2) * walk;
  titles.forEach(title => {
    updateShadow(title, x.toFixed(2), 1.5)
  })
}

function updateShadow(element, x, y) {
  element.style.textShadow = `${x}px ${y}px var(--shadow-main)`
}
function toggleNav(){
  if (!navOpen){
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  document.getElementById('mySidenav').style.left = "0px";
  document.getElementById('sidenav-tab').style.left = "250px";
  navOpen = true;
}
function closeNav() {
  document.getElementById('mySidenav').style.left = "-250px";
  document.getElementById('sidenav-tab').style.left = "0px";
  navOpen = false;
}
