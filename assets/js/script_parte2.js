// Creación de variables
let sticker1 = document.querySelector("#sticker-1");
let sticker2 = document.querySelector("#sticker-2");
let sticker3 = document.querySelector("#sticker-3");

let alerta = document.querySelector("#mensaje-alerta");
let boton = document.querySelector("#boton");

// --------------

// Se agrega evento con listener
boton.addEventListener("click", () => {
    let suma =
        Number(sticker1.value) +
        Number(sticker2.value) +
        Number(sticker3.value);

    if (suma <= 10) {
        alerta.innerHTML = `Llevas ${suma} productos.`;
        alerta.style.color = "black";
    } else {
        alerta.innerHTML = `⚠ Excediste la cantidad de items permitidos ⚠`;
        alerta.style.color = "red";
    }
});
