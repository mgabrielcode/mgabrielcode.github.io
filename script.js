const menuBtn = document.querySelector(".menu-icon");
const menuNav = document.querySelector("nav");
const menu = document.querySelectorAll(".tabs li");


menuBtn.addEventListener('click', ()=>{
    if(menuNav.style.visibility == "hidden"){
        menuNav.style.visibility = "visible";
        menuBtn.classList.remove("menu-open")
        menuBtn.classList.add("menu-close")
    } else {
        menuNav.style.visibility = "hidden";
        menuBtn.classList.remove("menu-close")
        menuBtn.classList.add("menu-open")
    }
});


(function(){
    for(let i = 0; i < menu.length; i++){
        const li = menu[i];
        li.addEventListener('click', () => {
            document.querySelector('li.is-active').classList.remove('is-active');
            li.classList.add('is-active');
            menuNav.style.visibility = "hidden";
            menuBtn.classList.remove("menu-close")
        menuBtn.classList.add("menu-open")
        })
    }
})();

