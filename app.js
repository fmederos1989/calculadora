// Definiendo funciones para Operadores

// Suma
function suma(a, b) {return a + b;}
// Resta
function resta(a, b) {return a - b;}
// Multiplicación
function multi(a, b) {return a * b;}

// División
function div(a, b) {return a / b;}


const numeros = document.querySelectorAll('.numero');
const display = document.querySelector('#resultado');
display.value= 0;
const historia = document.querySelector('#historico');


let entradaA = 0;
let entradaB = 0;
let operacion = 0;

const borrar = document.querySelector('#borrar');
borrar.addEventListener('click',() => {
    display.textContent = 0;
    historia.textContent = '';
});

const sumar = document.querySelector('#suma');
sumar.addEventListener('click',() => {
    historia.textContent += ' + ';
    display.textContent = entradaB;
    operacion = 1; 
});

const restar = document.querySelector('#resta');
restar.addEventListener('click',() => {
    historia.textContent +=' - ';
    display.textContent = entradaB;
    operacion = 2;
});

const multiplicacion = document.querySelector('#multiplicacion');
multiplicacion.addEventListener('click',() => {
    historia.textContent +=' * ';
    display.textContent = entradaB;
    operacion = 3;
});

const division = document.querySelector('#division');
division.addEventListener('click',() => {
    historia.textContent +=' / ';
    display.textContent = entradaB;
    operacion = 4;
});



numeros.forEach((numero) => {
    numero.addEventListener('click', (e) => {
            if (entradaA === 0){
                entradaA = e.target.value;
                display.textContent += entradaA;
                historia.textContent += entradaA;
            } else {
                entradaB = e.target.value;
                display.textContent = entradaB;
                historia.textContent += entradaB;
            }
            console.log(entradaA);
            console.log(entradaB);
        });
});

const result = document.querySelector('#igual')
result.addEventListener('click', () => {
    display.textContent = 'Hola Mundo'

    // switch (operacion) {
    //     case 1:
    //         display.textContent = suma(entradaA, entradaB);
    //         break;
    //     case 2:
    //         display.textContent = resta(entradaA, entradaB);
    //         break;
    //     case 3:
    //         display.textContent = multi(entradaA, entradaB);
    //         break;
    //     case 4:
    //         display.textContent = div(entradaA, entradaB);
    //         break;
    //     default:
    //         break;
    }
);
