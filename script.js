document.addEventListener("DOMContentLoaded", function() {
    const fechaObjetivo = new Date("2023-10-26T00:00:00"); // Cambia esto a la fecha y hora que desees.

    function mostrarContenido() {
        const ahora = new Date();

        if (ahora >= fechaObjetivo) {
            document.getElementById("contenido-oculto").style.display = "block";
            const pre_content = document.getElementById("pre-content");
            pre_content.classList.remove("hidden");
            pre_content.classList.add("visible");
            
            const post_content = document.getElementById("post-content");
            post_content.classList.remove("hidden");
            post_content.classList.add("visible");

        }
    }

    setInterval(mostrarContenido, 10000); // Comprueba cada segundo.
});
