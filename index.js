//lightmode/darkmode toggle====================================
const modeButton = document.querySelector(".mode-button");
const buttons = document.querySelectorAll("button");
const navigationTexts = document.querySelectorAll("nav ul li");
const svg = document.querySelectorAll("svg");
const width = window.innerWidth;

// if(document.readyState){
//     document.querySelector("html").classList.add("html-preloader");
// }

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("html").classList.add("html-preloader");
  loading();
});

window.addEventListener("load", (event) => {
  // alert('The page has fully loaded');
  document.querySelector("html").classList.remove("html-preloader");
  document.querySelector(".preloader").classList.add("fadeOut");
  document.querySelector(".preloader-logo").classList.add("fadeOut");
  document.querySelector(".side-container").classList.add("grow");
  document.querySelector(".line").classList.add("grow");
  document.querySelectorAll(".dot").forEach(function (dot) {
    dot.classList.add("show");
  });
  document.querySelector("#cv").classList.add("show");

  const paths = [];
  document.querySelectorAll(".icon").forEach(function (icon) {
    icon.querySelectorAll("path").forEach(function (path) {
      paths.push(path);
    });
  });
  paths.reverse().forEach(function (path, index) {
    setTimeout(function () {
      path.classList.add("show");
    }, (300 * index) + 3610);
  });
});
document.querySelector(".logo").classList.add("show-logo");

function loading() {
  // alert('eme');
}

// document.onabort(load)
modeButton.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("lightMode");
  document.querySelector(".intro h1").classList.toggle("lightMode");
  document.querySelector(".picture").classList.toggle("lightMode");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("lightMode");
  }
  for (let i = 0; i < navigationTexts.length; i++) {
    navigationTexts[i].classList.toggle("lightMode");
  }
  for (let i = 0; i < svg.length; i++) {
    svg[i].classList.toggle("lightMode");
  }

  if (document.querySelector("body").classList.contains("lightMode")) {
    document.querySelector(".logo").src = "./img/logo_black.png";
    document.querySelector(".mode-button").src = "./img/dark.png";
  } else {
    document.querySelector(".logo").src = "./img/logo_white.png";
    document.querySelector(".mode-button").src = "./img/light.png";
  }
  if (document.querySelector("body").classList.contains("lightMode")) {
    if (document.querySelector(".nav").classList.contains("active")) {
      document.querySelector(".nav.active").classList.add("lightMode");
    } else {
      document.querySelector(".nav").classList.remove("lightMode");
    }
  } else {
    document.querySelector(".nav.active").classList.remove("lightMode");
  }
});

//for dropdown navigation=========================================
const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector(".nav");

toggleButton.addEventListener("click", function () {
  nav.classList.toggle("active");
});
