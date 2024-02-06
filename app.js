let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//para habilitar cuando acertamos
    } else{
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }


    return;
}

// function limpiarCaja(){
//     let valorCaja = document.querySelector ('#valorUsuario');
//     valorCaja.value = '';
// }

// de esta forma sintetisamos el código
function limpiarCaja(){
    document.querySelector ('#valorUsuario').value = ''; 
}


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
// si ya sorteamos todos los números 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles');

    } else {

    // si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //para volver a deshabilitar el botón como
    // en el inicio

    
}

condicionesIniciales();

// ARRAYS //Arreglos

let numerosSorteados = [];
console.log (numerosSorteados);

numerosSorteados.push(5);
console.log(numerosSorteados);

numerosSorteados.push(8);
console.log(numerosSorteados);

console.log(numerosSorteados. length);
console.log (numerosSorteados [0]); // para ir a un elemento determinado de la lista
console.log (numerosSorteados [1]);

numerosSorteados.push(3); // 
console.log(numerosSorteados); // conosco los datos de la variable
console.log (numerosSorteados.length); //con length conosco la cantidad de elementos que tiene el arreglo

// Probando push


let listaDelSuper = [];
console.log (listaDelSuper);

listaDelSuper.push ('arroz');
console.log (listaDelSuper);
console.log(listaDelSuper.length);

listaDelSuper.push ('fideos'); //voy sumando elementos a la lista
listaDelSuper.push ('carne');
listaDelSuper.push ('pescado');

console.log (listaDelSuper.length);
console.log (listaDelSuper [0]);

console.log (listaDelSuper); //veo que elementos tengo en la lista


listaDelSuper.pop (); //para eliminar el último elemento de la lista .POP
console.log (listaDelSuper);

listaDelSuper.push ('completos');
console.log (listaDelSuper);
