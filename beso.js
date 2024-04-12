let contador = 0; // Inicializamos el contador en 0

// Función que se ejecuta al hacer clic en el botón
function sumarBeso() {
    contador++; // Incrementamos el contador en 1
    document.querySelector('label').innerText = 'Besos que te debo: ' + contador; // Actualizamos el texto del label con el contador
}

// Obtenemos el botón y le añadimos un event listener para que llame a la función sumarBeso() cuando se haga clic
document.querySelector('button').addEventListener('click', sumarBeso);
