document.addEventListener("DOMContentLoaded", function () {
    
    const hierbas = [
        {
            nombre: "Cenizo",
            imagen: "../images/hierba1.png",
            descripcion: "Podríamos rebautizar esta especie como espinacas silvestres o como quinoa española. Y es que aparte de crecer sola en todos los huertos, sus hojas son tan buenas como las espinacas."
        },
        {
            nombre: "Ortiga",
            imagen: "../images/hierba2.png",
            descripcion: "La ortiga es una planta silvestre con múltiples beneficios. Aunque su picadura es molesta, sus hojas pueden cocinarse como verdura y son ricas en hierro y vitaminas."
        },
        {
            nombre: "Diente de León",
            imagen: "../images/hierba3.png",
            descripcion: "El diente de león es una hierba comestible y medicinal. Sus hojas se pueden usar en ensaladas y sus raíces son empleadas como sustituto del café."
        },
        {
            nombre: "Malva",
            imagen: "../images/hierba4.png",
            descripcion: "Las hojas y flores de la malva son comestibles y tienen propiedades medicinales. Se utilizan en infusiones para aliviar problemas respiratorios."
        }
    ];

    let indice = 0; 
    const contenedor = document.querySelector(".hierbas-carr");
    const imgElement = document.querySelector(".hierbas-carr img");
    const titleElement = document.querySelector(".hierbas-carr h3");
    const descElement = document.querySelector(".hierbas-carr p");

    function cambiarHierba() {
        
        contenedor.classList.add("fade");

        setTimeout(() => {
            imgElement.src = hierbas[indice].imagen;
            titleElement.textContent = hierbas[indice].nombre;
            descElement.textContent = hierbas[indice].descripcion;

            contenedor.classList.remove("fade");
            
            indice = (indice + 1) % hierbas.length;
        }, 500);
    }

    
    setInterval(cambiarHierba, 10000);

    
    cambiarHierba();
});
