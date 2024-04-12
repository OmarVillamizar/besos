let contador = 0; 

function sumarBeso() {
    contador+=10; 
    document.querySelector('label').innerText = 'Besos que te debo: ' + contador; 
}

document.querySelector('button').addEventListener('click', sumarBeso);
