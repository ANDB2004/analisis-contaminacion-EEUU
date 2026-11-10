// Aparición suave de los cuadros, textos e imágenes al deslizar la página
document.addEventListener("DOMContentLoaded", () => {
    // Elementos que aparecen con animación (en todas las páginas)
    const selectores = [
        ".academic-notice-container",
        ".hero-text",
        ".hex-link",
        ".motivation-section",
        ".about-photo",
        ".about-text",
        ".intro-block",
        ".objectives-section",
        ".team-card",
        ".section-heading",
        ".var-subtitle",
        ".var-card",
        ".table-figure",
        ".table-actions"
    ].join(", ");

    const elementos = document.querySelectorAll(selectores);

    // Si el dispositivo pide menos movimiento o el navegador es muy antiguo,
    // todo se muestra sin animación.
    const sinAnimacion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (sinAnimacion || !("IntersectionObserver" in window)) return;

    elementos.forEach((el) => el.classList.add("reveal"));

    const observador = new IntersectionObserver(
        (entradas) => {
            let orden = 0;
            entradas.forEach((entrada) => {
                if (!entrada.isIntersecting) return;

                const el = entrada.target;
                // Los elementos que aparecen a la vez entran uno tras otro
                const retraso = Math.min(orden, 5) * 90;
                orden++;

                el.style.transitionDelay = retraso + "ms";
                el.classList.add("is-visible");
                observador.unobserve(el);

                // Al terminar, se quita la animación para que los efectos
                // propios de cada cuadro (como el hover) sigan funcionando
                setTimeout(() => {
                    el.classList.remove("reveal", "is-visible");
                    el.style.transitionDelay = "";
                }, 900 + retraso);
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elementos.forEach((el) => observador.observe(el));
});