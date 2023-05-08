// No cambies los nombres de las funciones.

const { isString } = require("markdown-it/lib/common/utils");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let array_incemento = [];
    array_incemento.push(array[i]+1);
  }
  return array_incemento;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let palabras_juntas;
  palabras_juntas = palabras.join(' ');
  return palabras_juntas
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0; i < array.length; i++){
    if(array[i]==elemento){
      return true; // una vez que devuelve true ya esta, no lee el return false porque ya devolvio
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma_enteros = 0;
  for(let i = 0; i < numeros.length; i++){
    suma_enteros = suma_enteros + numeros[i];
  }
  return suma_enteros;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let acumulador = 0;
  let promedio;
  for(let i = 0; i < resultadosTest.length; i++){
    acumulador += resultadosTest[i];
  }
  promedio = acumulador / resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let flag = 0;
  let maxNumero;
  for(let i = 0; i < numeros.length; i++){
    if(flag == 0){
      maxNumero = numeros[i];
      flag = 1;
    }
    else{
      if(numeros[i] > maxNumero){
        maxNumero = numeros[i];
      }
    }
  }
  return maxNumero;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let producto = 1;
  for(let i = 0; i < arguments.length; i++){
    producto = producto * arguments[i];
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador18 = 0;
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 18){
      contador18++; 
    }
  }
  return contador18;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia == 1 ||numeroDeDia == 7){
    return 'Es fin de semanada';
  }
  else if(numeroDeDia > 1 && numeroDeDia < 7){
    return 'Es dia laboral';
  }
  else{
    return 'Numero de dia no valido';
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n_string = n.toString();
  if(n_string[0] == '9'){
    return true;
  }
  else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let sonIguales = true;
  let elemento = arreglo[0];
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] !== elemento){
      sonIguales = false;
      break;
    }
    return sonIguales;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevo_array = []
  let existen = false;
  for(let i = 0; i < array.length; i++){
    if(array[i] == 'Enero' || array[i] == 'Marzo' || array[i] == 'Noviembre'){
      nuevo_array.push(array[i]);
      existen = true;
    }
  }
  if(existen == true){
    return nuevo_array;
  }
  else{
    return 'No se encontraron los meses pedidos';
  }
}



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevo_array = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 100){
      nuevo_array.push(array[i]);
    }
  }
  return nuevo_array;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let i = 0;
  let cantidad_veces = 10;
  let nuevo_array = []
  while(i < cantidad_veces){
    numero += 2;
    if(numero === i){
      return 'Se interrumpió la ejecución';
    }
    nuevo_array.push(numero);
    i++;
  }
  return nuevo_array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuevo_array = [];
  let i = 0;
  while(i < 10){
    i++;
    if(i == 5){
      continue;
    }
    numero += 2;
    nuevo_array.push(numero);
  }
  return nuevo_array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
