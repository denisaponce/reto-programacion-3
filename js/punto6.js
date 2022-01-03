/*      6. Dos listas: while
* Realizar un programa que permita cargar dos listas de 15 valores cada una. 
* Informar con un mensaje cuál de las dos listas tiene un valor acumulado mayor 
* (mensajes "Lista 1 mayor", "Lista 2 mayor", "Listas iguales")
* Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo */


const lista1 = [];
const lista2 = [];
let i = 1;
let i2 = 1;

while (i <= 15) {
  const numero1 = parseInt(prompt('Ingrese un numero en la lista 1'));
  lista1.push(numero1);
  i++;
}

while (i2 <= 15) {
  const numero2 = parseInt(prompt('Ingrese un numero en la lista 2'));
  lista2.push(numero2)
  i2++;

}

const sumaLista1 = lista1.reduce((a, b) => a + b);
const sumaLista2 = lista2.reduce((a, b) => a + b);


if (sumaLista1 === sumaLista2) {
  alert('La lista 1 y la lista 2 son iguales');
} else if (sumaLista1 < sumaLista2) {
  alert('La lista 1 es menor que la lista 2 ');
} else if (sumaLista1 > sumaLista2) {
  alert('La lista 1 es mayor que la lista 2');
}

