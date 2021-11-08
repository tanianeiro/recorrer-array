"use strict";
/**
 * document.querySelectorAll  Para seleccionar los artículos
 * document.querySelector Para los botones
 * 
 * nodo.addEventListener
 * nodo.nextElementSibling
 * nodo.firstElementChild
 * 
 * for(){
 * }
 * 
 * while(){
 * }
 * 
 * do{
 * }while();
 */

// variables
// capturo los etiquetas de article
const a1 = document.querySelectorAll(".a1");
const a2 = document.querySelectorAll(".a2");
const a3 = document.querySelectorAll(".a3");

let numbers = [1,2,3];

// funciones
const ordenarFor = (evento) => {
    evento.preventDefault();  //evito propagación del evento. En este caso que el enlace vaya a su destino(href)

    // capturar nodo parrafo donde ver el texto
    let p1 = a1[1].firstElementChild.nextElementSibling;
    let p2 = a1[1].firstElementChild.nextElementSibling.nextElementSibling;   //puedes simplificarlo p1.nextelementChild;

    p1.innerHTML = "<h6 style=\"color:red; font-weight:bold\">for: orden ascendente</h6>";
    for(let i =0; i < numbers.length; i++){
        p1.innerHTML += `<div>Posicion ${i}: ${numbers[i]}</div>`;
    }
    p2.innerHTML = "<h6 style=\"color:red; font-weight:bold\">for: orden descendente</h6>";
    for(let i = numbers.length-1; i >=0; i--){
        p2.innerHTML += `<div>Posicion ${i}: ${numbers[i]}</div>`;
    }
    
}

// eventos
// escuchar boton
document.querySelector("#b1")
    .addEventListener(
        "click",
        ordenarFor
    );

 
    
// ejer con While

const ordenarWhile = (e) =>{
    e.preventDefault(); 
    let numbers = [1,2,3];
    let x = 0;
     while(x<numbers.length){
         console.log(`Posicion ascendente${x}: ${numbers[x]}`)
         x++;
     }
     x = numbers.length-1;
     while(x>=0){
        console.log(`Posicion descendente${x}: ${numbers[x]}`)
        x--;
    }
}

// eventos
// escuchar boton
document.querySelector("#b2")
    .addEventListener(
        "click",
        ordenarWhile
    );


// ejer con do ...while
const ordenarDoWhile = (e) =>{
    e.preventDefault(); 
    let numbers = [1,2,3];
// E6 for of
//       for(let valor of numbers){
//          alert(valor)
//       }
//   metodo forEach
     numbers.forEach(
         (valor,indice,array) =>{
              console.log(`${valor}-${indice}-Array[${array}]`)
         }
     );

    // let x = 0;
    //  do{
    //      console.log(`Posicion ascendente${x}: ${numbers[x]}`);
    //      x++;
    //  }while(x<numbers.length);

    //  x = numbers.length-1;

    //  do{
    //     console.log(`Posicion descendente${x}: ${numbers[x]}`);
    //     x--;
    // }while(x>=0);
}

// eventos
// escuchar boton
document.querySelector("#b3")
    .addEventListener(
        "click",
        ordenarDoWhile
    );