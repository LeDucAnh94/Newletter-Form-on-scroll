const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntroView({
        behavior: "smooth",
    });
}

// Sicky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

// Scroll Indicator JS
window.onscroll = () => scrollProgress();

function scrollProgress() {
    const currentState = 
    document.body.scrollTop || document.documentElement.scrollTop;

    const pageHeight = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
    
    const scrollPercentage = (currentState / pageHeight) * 100;

    const progressBar = document.querySelector(".progress");

    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "%";

    // Newletter JS
    const newLetter = document.querySelector(".newsletter");

    if (scrollPercentage > 80) {
        newLetter.style.transform = "translateX(0)";
    } else {
        newLetter.style.transform = "translateX(-100%)";
    }

    document.querySelector(".fa-times").addEventListener("click", () => {
        newLetter.style.transform = "translateX(-100%)";
    });
}