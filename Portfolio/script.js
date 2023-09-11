// let menuBtn = document.querySelector(".menu-btn")
// let cancelBtn = document.querySelector(".cancel-btn")
// let navbar = document.querySelector(".navbar")

// menuBtn.addEventListener("click", function (e) {
//     menuBtn.style.opacity = "0";
//     menuBtn.style.pointerEvents = "none";
//     navbar.classList.add("active");
// })

// cancelBtn.addEventListener("click", function (e) {
//     menuBtn.style.opacity = "1";
//     menuBtn.style.pointerEvents = "auto";
//     navbar.classList.remove("active");
// })

let menuBtn = document.querySelector(".menu-btn")
let cancelBtn = document.querySelector(".cancel-btn")
let navbar = document.querySelector(".navbar")
let body = document.querySelector("body")

menuBtn.onclick = function () {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navbar.classList.add("active");
    body.style.overflow = "hidden"
}

cancelBtn.onclick = function () {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navbar.classList.remove("active");
    body.style.overflow = "auto"
}

//Sticky navbar
let nav = document.querySelector("nav");
let val;
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
}

// Side navigation menu close
let navLinks = document.querySelectorAll(".menu li a");
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        navbar.classList.remove("active");
        body.style.overflow = "auto"
    });

}