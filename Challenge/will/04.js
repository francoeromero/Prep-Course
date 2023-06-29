/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let izq_der = '';
  let der_izq = '';
  let num_string = num.toString();
  let son_iguales = false;

  for(let i = 0; i < num_string.length; i++){
      izq_der += num_string[i];
  }
  for(let i = num_string.length -1; i >= 0; i--){
      der_izq += num_string[i];
  }
  return izq_der === der_izq;
}

// otra forma:
    // let izq_der = [];
    // let der_izq = [];
    // let num_string = num.toString();
    // let son_iguales = false;

    // for(let i = 0; i < num_string.length; i++){
    //     izq_der.push(num_string[i]);
    // }
    // for(let i = (num_string.length - 1); i >= 0; i--){
    //     der_izq.push(num_string[i])
    // }
    // for(let i = 0; i < izq_der.length; i++){
    //     if(izq_der[i] === der_izq[i]){
    //         son_iguales = true;
    //     }
    //     else{
    //         break;
    //     }
    // }
    // return son_iguales;

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico