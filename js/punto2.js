/*   2. Altura n: while
* Se ingresan un conjunto de n alturas de personas por teclado. 
* Mostrar la altura promedio de las personas.*/

const cantAlturas = parseInt(prompt('Ingrese alturas'));
let alturasPromedio = 0;
let i = 1;


while (i <= cantAlturas) {

  let altura = parseInt(prompt('Ingrese la altura'));
  alturaPromedio = alturasPromedio + altura;
   i++;
}

alert (`La altura promedio es: ${alturasPromedio / cantAlturas}` );

