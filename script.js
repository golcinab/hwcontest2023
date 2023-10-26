document.addEventListener("DOMContentLoaded", function() {
    const fechaObjetivo = new Date("2023-10-27T00:00:00"); // Cambia esto a la fecha y hora que desees.

    function mostrarContenido() {
        const ahora = new Date();

        if (ahora >= fechaObjetivo) {
            document.getElementById("contenido-oculto").style.display = "block";
        }
    }

    setInterval(mostrarContenido, 1000); // Comprueba cada segundo.
});
