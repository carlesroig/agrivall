document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".fa-bars");
    const mobileNav = document.getElementById("nav-mobil");
    
    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        mobileNav.classList.toggle("show");
    });
    
    document.addEventListener("click", function (event) {
        if (!mobileNav.contains(event.target) && !menuIcon.contains(event.target)) {
            mobileNav.classList.remove("show");
        }
    });
});