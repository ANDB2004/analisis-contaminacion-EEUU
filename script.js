// Inicialización del panel
document.addEventListener("DOMContentLoaded", () => {
    const modulos = document.querySelectorAll(".hexagon-card-link");

    modulos.forEach(modulo => {
        modulo.addEventListener("click", (e) => {
            const titulo = modulo.querySelector("h3").innerText;
            console.log(`Abriendo espacio de trabajo: ${titulo}`);
        });
    });
});
