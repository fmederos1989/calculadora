//! Definiendo funciones para Operadores

//! Suma
function suma(a, b) {return a + b;}
//! Resta
function resta(a, b) {return a - b;}
//! Multiplicación
function multi(a, b) {return a * b;}

//! División
function div(a, b) {return a / b;}


const numeros = document.querySelectorAll('.numero');
const display = document.querySelector('#resultado');
display.value= 0;
const historia = document.querySelector('#historico');


let entradaA = 0;
let entradaB = 0;
let operacion = 0;
let total = 0;
let cambio = 0;


const borrar = document.querySelector('#borrar');
borrar.addEventListener('click',() => {
    display.textContent = '';
    historia.textContent = '';
    entradaA = 0;
    entradaB = 0;
    operacion = 0;
    total = 0;
});

const sumar = document.querySelector('#suma');
sumar.addEventListener('click',() => {
    if(total === 0) {
        cambio = 1;
        historia.textContent +=' + ';
        display.textContent = ''
        operacion = 1;
    }else{
        cambio = 1;
        entradaA = total;
        historia.textContent +=' + ';
        display.textContent = '';
        operacion = 1;
    }
});

const restar = document.querySelector('#resta');
restar.addEventListener('click',() => {
    if(total === 0) {
        cambio = 1;
        historia.textContent +=' - ';
        display.textContent = ''
        operacion = 2;
    }else{
        cambio = 1;
        entradaA = total;
        historia.textContent +=' - ';
        display.textContent = '';
        operacion = 2;
    }
});

const multiplicacion = document.querySelector('#multiplicacion');
multiplicacion.addEventListener('click',() => {
    if(total === 0) {
        cambio = 1;
        historia.textContent +=' x ';
        display.textContent = ''
        operacion = 3;
    }else{
        cambio = 1;
        entradaA = total;
        historia.textContent +=' x ';
        display.textContent = '';
        operacion = 3;
    }
});

const division = document.querySelector('#division');
division.addEventListener('click',() => {
    if(total === 0) {
        cambio = 1;
        historia.textContent +=' / ';
        display.textContent = ''
        operacion = 4;
    }else{
        cambio = 1;
        entradaA = total;
        historia.textContent +=' / ';
        display.textContent = '';
        operacion = 4;
    }
});

numeros.forEach((numero) => {
    numero.addEventListener('click', (e) => {
            if (operacion === 0){
                entradaA = parseInt(e.target.value);
                display.textContent += entradaA;
                historia.textContent += entradaA;
                entradaA = parseInt(display.textContent);
            } else {
                entradaB = parseInt(e.target.value);
                display.textContent += entradaB;
                historia.textContent += entradaB;
                entradaB = parseInt(display.textContent);
            }
            console.log(`cambio: ${cambio}`);
            console.log(`entrada A: ${entradaA}`);
            console.log(`entrada B: ${entradaB}`);
        });
});

const result = document.querySelector('#igual')
result.addEventListener('click', () => {
    switch (operacion) {
        case 1:
            display.textContent = suma(entradaA, entradaB);
            total = suma(entradaA, entradaB);
            break;
        case 2:
            display.textContent = resta(entradaA, entradaB);
            total = resta(entradaA, entradaB);
            break;
        case 3:
            display.textContent = multi(entradaA, entradaB);
            total = multi(entradaA, entradaB);
            break;
        case 4:
            display.textContent = div(entradaA, entradaB);
            total = div(entradaA, entradaB);
            break;
        default:
            break;
        }
    console.log(`Total : ${total}`);
});

