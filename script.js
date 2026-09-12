const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");


// ================================
// SET THEME
// ================================

function setTheme(theme) {

    document.body.classList.remove("dark", "light");

    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);

}


// ================================
// DARK MODE
// ================================

darkMode.addEventListener("click", () => {

    setTheme("dark");

});


// ================================
// LIGHT MODE
// ================================

lightMode.addEventListener("click", () => {

    setTheme("light");

});


// ================================
// LOAD SAVED THEME
// ================================

const savedTheme = localStorage.getItem("theme");


if (savedTheme) {

    setTheme(savedTheme);

} else {

    // Use system preference

    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(prefersDark ? "dark" : "light");

}

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (mobileMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* close menu after clicking a link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

const roles = [
    "Web Developer",
    "Creative Designer",
    "Python Programmer",
    "CS Student"
];

const changingText = document.getElementById("changing-text");

let roleIndex = 0;

setInterval(() => {

    // exit animation
    changingText.classList.remove("show");
    changingText.classList.add("hide");

    setTimeout(() => {

        roleIndex = (roleIndex + 1) % roles.length;

        changingText.textContent = roles[roleIndex];

        // enter animation
        changingText.classList.remove("hide");
        changingText.classList.add("show");

    }, 150);

}, 3000);