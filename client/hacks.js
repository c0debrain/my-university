// Basic scrollspy to add the shadow to the navbar
window.onscroll = function () {
    let y = document.documentElement.scrollTop || document.body.scrollTop;
    if(y > 0) {
        document.getElementById("nav").classList.add("shadow");
    } else {
        document.getElementById("nav").classList.remove("shadow");
    }
};