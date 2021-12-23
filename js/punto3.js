//          3. Sueldos de personal: while
//En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y $500, 
//realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos
//empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa
// deberá informar el importe que gasta la empresa en sueldos al personal.


const cantidadEmpleados = parseInt(prompt('Ingrese cantidad empleados'));
let cobraMucho = 0;
let cobraPoco = 0;
let total = 0;
let i = 1;

while (i <= cantidadEmpleados) {
  const sueldos = parseInt(prompt('ingrese el sueldo'));
  if (sueldos >= 100 && sueldos <= 300) {
    cobraPoco++;
  } else {
    cobraMucho++;

  }
  total = total + sueldos;

  i++;

}

alert ( `Cobran mucho: ${cobraMucho} y cobran poco: ${cobraPoco}`);
