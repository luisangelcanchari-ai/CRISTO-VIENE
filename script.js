// Muestra mensaje de bienvenida con fecha actual
const mensaje = document.getElementById('mensajeBienvenida');
if (mensaje) {
    const fecha = new Date();
    const hora = fecha.getHours();
    let saludo;

    if (hora < 12) saludo = "¡Buenos días!";
    else if (hora < 18) saludo = "¡Buenas tardes!";
    else saludo = "¡Buenas noches!";

    mensaje.textContent = `${saludo} Bienvenido a CRISTO VIENE. Hoy es ${fecha.toLocaleDateString()}.`;
}

// Botón interactivo
const btn = document.getElementById('btnGracias');
if (btn) {
    btn.addEventListener('click', () => {
        alert("Gracias por visitar CRISTO VIENE 🧰🚲 ¡Tu satisfacción es nuestra prioridad!");
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });
});
