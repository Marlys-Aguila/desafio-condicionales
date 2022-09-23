// Creación de variables
let numero1 = document.querySelector("#seleccion-1");
let numero2 = document.querySelector("#seleccion-2");
let numero3 = document.querySelector("#seleccion-3");

let boton = document.querySelector("#boton");
let mensaje = document.querySelector("#mensaje");

// -------------------

// Creación de evento con listener
boton.addEventListener("click", () => {
    let password = numero1.value + numero2.value + numero3.value;

    if (password === "911") {
        mensaje.innerHTML = `Password 1 es correcto`;
        mensaje.style.color = `black`;
    } else if (password === "714") {
        mensaje.innerHTML = `Password 2 es correcto`;
        mensaje.style.color = `black`;
    } else {
        mensaje.innerHTML = `Password incorrecto`;
        mensaje.style.color = `red`;
    }
});
