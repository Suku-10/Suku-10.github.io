let newBtn = document.getElementById("newBtn");
let regularBtn = document.getElementById("regularBtn");
let trendingBtn = document.getElementById("trendingBtn");

let newContainer = document.querySelector(".new");
let regularContainer = document.querySelector(".regular");
let trendingContainer = document.querySelector(".trending");

newBtn.addEventListener("click", () => {
    newContainer.classList.remove('disable');
    regularContainer.classList.add('disable');
    trendingContainer.classList.add('disable');
});

regularBtn.addEventListener("click", () => {
    regularContainer.classList.remove('disable');
    newContainer.classList.add('disable');
    trendingContainer.classList.add('disable');
});

trendingBtn.addEventListener("click", () => {
    trendingContainer.classList.remove('disable');
    newContainer.classList.add('disable');
    regularContainer.classList.add('disable');
});

// WOW JS
new WOW().init();

let typingEffect = new Typed(".multitext", {
    strings: ['C', "Java", 'C++', 'Python', 'C#', 'Web development', 'React JS', 'Angular JS', 'Machine Learning', 'and many more'],
    loop: true,
    typeSpeed: 30,
    backSpeed: 40,
    backDelay: 1500
});

// Cancel button navbar
let menu = document.querySelector(".navbar-toggler-icon");

menu.addEventListener("click", () => {
	menu.classList.toggle('fa-solid');
	menu.classList.toggle('fa-xmark');
	menu.classList.toggle('navbar-toggler-icon');
});