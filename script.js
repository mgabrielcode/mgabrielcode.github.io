const menuIcon = document.querySelector(".menu-icon")
const menuNav = document.querySelector(".nav");
const menu = document.querySelectorAll(".menu li");


function changeIconMenu(){
    if(menuNav.classList.toggle("active")){
        menuIcon.classList.replace("menu-open", "menu-close");
    } else {
        menuIcon.classList.replace("menu-close", "menu-open");
    };
}

menuIcon.addEventListener('click', () => {
    changeIconMenu();
});


(function(){
    for(let i = 0; i < menu.length; i++){
        const li = menu[i];
        li.addEventListener('click', () => {
            document.querySelector('li.is-active').classList.remove('is-active');
            li.classList.add('is-active');
            menuNav.classList.remove("active");
            menuIcon.classList.remove("menu-close")
            menuIcon.classList.add("menu-open")
        })
    }
})();
