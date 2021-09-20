const hed = document.querySelector(".header");
let b = hed.offsetTop;
window.addEventListener("scroll", () => {
    let a = document.documentElement.scrollTop;


    if (a >= b) {
        hed.classList.add("active");
    } else {
        hed.classList.remove("active");
    }

})

const texta = document.querySelector("#texta");
const spa = document.querySelector("#span");
texta.addEventListener("input", () => {
    let col = "";

    if (texta.value.length < 175) {
        col = "rgba(37, 37, 37, 0.7)";
    } else {
        col = "rgba(255, 0, 0, 0.7)"
    }
    spa.innerHTML = `${200-texta.value.length}کارکتر دیگر `;
    spa.style.color = col;
})