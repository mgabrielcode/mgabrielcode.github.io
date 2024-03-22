const menuBtn = document.querySelector(".menu-icon");
const menuNav = document.querySelector("nav");
const menu = document.querySelectorAll(".tabs li");


menuBtn.addEventListener('click', ()=>{
    if(menuNav.style.display == "none"){
        menuNav.style.display = "flex";
    } else {
        menuNav.style.display = "none";
    }
})


(function(){
    for(let i = 0; i < menu.length; i++){
        const li = menu[i];
        li.addEventListener('click', () => {
            document.querySelector('li.is-active').classList.remove('is-active');
            li.classList.add('is-active');
            menuNav.style.display = "none";
        })
    }
s 
})();

