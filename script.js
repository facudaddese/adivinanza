let numero = Math.round(Math.random() * 100);
console.log(numero);
let resultado = document.getElementById('resultado');
let intentos = 0;

const adivinanza = () => {
    let numeroElegido = document.getElementById('numeroElegido').value;

    if (numeroElegido < 1 || numeroElegido > 100) {
        resultado.innerHTML = 'Elija un numero entre el 1 y el 100';
        resultado.style.color = 'black';
        return;
    }
    if (numeroElegido == numero) {
        resultado.innerHTML = 'Acertaste el numero';
        resultado.style.color = 'green';
        intentos++;
        document.getElementById('intentos').textContent = 'Numero de intentos: ' + intentos;

    } else if (numeroElegido < numero) {
        resultado.innerHTML = 'Ingrese un numero mas alto';
        resultado.style.color = 'red';
        intentos++;
        document.getElementById('intentos').textContent = 'Numero de intentos: ' + intentos;
    } else {
        resultado.innerHTML = 'Ingrese un numero mas bajo';
        resultado.style.color = 'red';
        intentos++;
        document.getElementById('intentos').textContent = 'Numero de intentos: ' + intentos;
    }
}
