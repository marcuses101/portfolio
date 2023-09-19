const WALK = 2;

const root = document.querySelector(":root");
let navOpen = false;

function toggleNav() {
  if (!navOpen) {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.left = "0px";
  document.getElementById("sidenav-tab").style.left = "250px";
  navOpen = true;
}
function closeNav() {
  document.getElementById("mySidenav").style.left = "-250px";
  document.getElementById("sidenav-tab").style.left = "0px";
  navOpen = false;
}

function handleMouseMove(event) {
  let x =
    ((window.innerWidth / 2 - event.clientX) / (window.innerWidth / 2)) * WALK;
  root.style.setProperty("--shadow-x", `${x}px`);
}

//enable mousemove effect on desktop
if (window.innerWidth >= 750) {
  window.addEventListener("mousemove", handleMouseMove);
}
