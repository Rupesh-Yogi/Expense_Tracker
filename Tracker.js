const menu_icon = document.querySelector(".menu-icon");
const right = document.querySelector(".right");

menu_icon.addEventListener("click", ()=> {
    right.classList.toggle("active");
})  