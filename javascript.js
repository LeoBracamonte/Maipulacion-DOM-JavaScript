
// LEYENDO HTML CON JS (1)

//const h1 = document.querySelector("h1");
//const p = document.querySelectorAll('p');
//const parrafo = document.getElementsByClassName('parrafo') // clase .
//const pId = document.getElementById('pId') // ID #
//const input = document.querySelector('input') 

/*
console.log(input.value);

console.log( {
    h1,
    p,
    parrafo,
    pId,
    input
});
 */


// ESCRIBIENDO HTML DESDE JS (2)

//h1.innerHTML = 'Cambio desde SJ'; // Se pueden usar etiquetas, no es tan seguro
  //h1.innerText = 'Cambio desde SJ';
  //h1.getAttribute('pantalla'); // marca
  //h1.setAttribute('class','verde');

/*
h1.classList.add('lila');
h1.classList.remove('verde');
input.value = "1113";
*/


const img = document.createElement('img');
//img.setAttribute('src', 'URL de alguna imagen')

//agregamos la img dentro de un contenedor que ya existe

//pId.append(img);

// INTERACTUANDO CON USUARIOS (3)

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult= document.querySelector('#result');
const form = document.querySelector('#form');

function btnOnClick() {
    //console.log('Escucahdno el evento del click');
    const sumImputs =input1.value + input2.value;
    pResult.innerHTML = "Resultado: " +sumImputs;
};

//  addEventListener

btn.addEventListener('click', btnOnClick);       // escucha cada vez que pase cierto evento y ejecuta {}



