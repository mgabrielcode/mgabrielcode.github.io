const menuBtn = document.querySelector(".menu-icon")
const menuNav = document.querySelector("nav");
const menu = document.querySelectorAll(".tabs li");


menuBtn.addEventListener('click', ()=>{
    if(menuNav.classList == "active"){
        menuNav.classList.remove("active");
        menuBtn.classList.remove("menu-close");
        menuBtn.classList.add("menu-open");
    } else {
        menuNav.classList.add("active");
        menuBtn.classList.remove("menu-open");
        menuBtn.classList.add("menu-close");
    } 
});


(function(){
    for(let i = 0; i < menu.length; i++){
        const li = menu[i];
        li.addEventListener('click', () => {
            document.querySelector('li.is-active').classList.remove('is-active');
            li.classList.add('is-active');
            menuNav.classList.remove("active");
            menuBtn.classList.remove("menu-close")
            menuBtn.classList.add("menu-open")
        })
    }
})();
