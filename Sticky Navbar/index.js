const NavbarEl = document.querySelector(".Navbar");
const bottomContainerEl = document.querySelector(".bottom-container");
window.addEventListener("scroll",()=>{
    if(window.scrollY>bottomContainerEl.offsetTop-NavbarEl.offsetHeight-50){
        NavbarEl.classList.add("active");
    }
    else{
        NavbarEl.classList.remove("active");
    }
})