// Added a fun mousemove shadow effect

const titles = document.querySelectorAll(".title");
const stickyNav = document.querySelector("#large-nav");
const navTop = stickyNav.offsetTop;
const navHeight = stickyNav.offsetHeight;
const walk = 2;
let navOpen = false;

function updateShadow(element, x, y) {
  element.style.textShadow = `${x}px ${y}px var(--shadow-main)`;
}
function toggleNav() {
  if (!navOpen) {
    openNav();
  } else {
    closeNav();
  }
}

function stickNav() {
  if (window.innerWidth > 750){
    console.log(navHeight)
  if (navTop <= window.scrollY) {
    document.querySelector("main").style.paddingTop = navHeight+"px";
    document.body.classList.add("stick");
  } else {
    document.querySelector("main").style.paddingTop = 0;
    document.body.classList.remove("stick");
  }
}}

window.addEventListener("scroll", stickNav);

function clear(e) {
  console.log("Hello World");
  e.reset();
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
    ((window.innerWidth / 2 - event.clientX) / (window.innerWidth / 2)) * walk;
  titles.forEach((title) => {
    updateShadow(title, x.toFixed(2), 1.5);
  });
}

//enable mousemove effect on desktop

if (window.innerWidth >= 750) {
  window.addEventListener("mousemove", handleMouseMove);
}
