/*        7. Pares e Impares: while
* Desarrollar un programa que permita cargar n números enteros y luego 
* nos informe cuántos valores fueron pares y cuántos impares.
* Emplear el operador “%” en la condición de la estructura condicional:
*       if (valor % 2 === 0)         //Si el if da verdadero es par.   */


const numerosEnteros = [];
let numPares = 0;
let numImpares = 0;

let x = 1;

while (x <= 10) {
  const numeros = parseInt(prompt('Ingrese 10 numeros enteros'));
  numerosEnteros.push(numeros);
  x++;

}

let i = 0;
while (i < numerosEnteros.length) {
  if (numerosEnteros[i] % 2 === 0) {
    numPares++;

  } else {
    numImpares++;
  }
  i++;
}

alert(`La cantidad de numeros pares es de : ${numPares} y la cantidad de numeros impares es de: ${numImpares}`);

