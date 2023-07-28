function changeBg() {
    var navbarid = document.getElementById("navbar");
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue < 120 ){
        navbarid.classList.remove("bgColorChangeGrey");
    }
    else{
        navbarid.classList.add("bgColorChangeGrey");
    }
    if(scrollValue > 500){
        navbarid.classList.add("bgColorChange");
    }
    else{
        navbarid.classList.remove("bgColorChange");
    }
    if(scrollValue > 3030 ){
        navbarid.classList.remove("bgColorChange");
        navbarid.classList.add("bgColorChangeGrey");
    }
}
window.addEventListener("scroll", changeBg);