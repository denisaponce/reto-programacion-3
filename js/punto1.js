/* 1. Notas de Alumnos: while
* Escribir un programa que solicite ingresar 10 notas de alumnos y nos informe 
* cuántos tienen notas mayores o iguales a 7 y cuántos menores.*/


let i = 1;
let cantMayor = 0;
let cantMenor = 0;


while (i <= 10) {
  const nota = parseInt(prompt('Ingrese una Nota'));
  if (nota >=7) {
    cantMayor++;
  } else {
    cantMenor++;
  }
  i++;
}

alert(`La cantidad mayor: ${cantMayor} y la cantidad menor es: ${cantMenor}`);