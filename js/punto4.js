
/*     4. Serie de 25: while
*  Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc.
* (No se ingresan valores por teclado)*/


const contador = [];
const numeroOnce = 11;
let inicio = 1;

while (inicio <= 25) {
  const sumaDeNumeros = inicio * numeroOnce;
  contador.push(sumaDeNumeros);
  inicio++;
}
console.log(contador);


