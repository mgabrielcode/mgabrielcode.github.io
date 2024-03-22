const menuBtn = document.querySelector(".menu-icon");
const menuNav = document.querySelector("nav");

menuBtn.addEventListener('click', ()=>{
    if(menuNav.style.display == "none"){
        menuNav.style.display = "flex";
    } else {
        menuNav.style.display = "none";
    }
})