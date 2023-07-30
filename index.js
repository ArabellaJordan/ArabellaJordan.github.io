//lightmode/darkmode toggle====================================
const modeButton = document.querySelector(".mode-button");
const buttons = document.querySelectorAll("button");
const navigationTexts = document.querySelectorAll("nav ul li");
const svg = document.querySelectorAll("svg");

modeButton.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("lightMode");
    document.querySelector(".intro h1").classList.toggle("lightMode");
    document.querySelector(".picture").classList.toggle("lightMode");
    if (document.querySelector(".nav").classList.contains("active")){
    document.querySelector(".nav.active").classList.toggle("lightMode");
    }
    for(let i = 0; i< buttons.length; i++){
        buttons[i].classList.toggle("lightMode");
    }
    for(let i=0; i < navigationTexts.length; i++){
        navigationTexts[i].classList.toggle("lightMode");
    }
    for(let i = 0; i < svg.length; i++){
        svg[i].classList.toggle("lightMode");
    }
})

//for dropdown navigation=========================================
const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector(".nav");

toggleButton.addEventListener("click", function(){
    nav.classList.toggle("active");
});

