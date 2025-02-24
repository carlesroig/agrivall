document.addEventListener('DOMContentLoaded', ()=>{

    const menuIcon = document.querySelector(".fa-bars");
    const mobileNav = document.getElementById("nav-mobil");
    menuIcon.addEventListener("click", function () {
        mobileNav.style.display = mobileNav.style.display === "flex" ? "none" : "flex";
    });

})