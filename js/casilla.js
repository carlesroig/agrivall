document.addEventListener('DOMContentLoaded', ()=>{
    const images = [
        "../images/casilla.jpg",
        "../images/fachada.jpg",
        "../images/103092086.jpg",
        "../images/367231749.jpg",
        "../images/447046025.jpg"
    ];
    
    let currentIndex = 0;
    
    const imgElement = document.getElementById("carrusel");
    
    function changeImage() {
        imgElement.style.opacity = 0;
    
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            imgElement.src = images[currentIndex];
            imgElement.style.opacity = 1;
        }, 300);
    }
    
    setInterval(changeImage, 4000); 
})

const images = [
    "../images/casilla.jpg",
    "../images/103092086.jpg",
    "../images/367231749.jpg",
    "../images/447046025.jpg",
    "../images/fachada.jpg"
];

let currentIndex = 0;

const imgElement = document.getElementById("carrusel");

function changeImage() {
    imgElement.style.opacity = 0.2;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
        imgElement.style.opacity = 1;
    }, 2000);
}

setInterval(changeImage, 10000); 