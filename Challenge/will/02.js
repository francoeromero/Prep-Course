/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca
  let flag = 0;
    let string_mas_largo;
    for(let i = 0; i < strings.length; i++){
        if(flag == 0){
            string_mas_largo = strings[i];
            flag = 1;
        }
        else{
            if(strings[i].length > string_mas_largo.length){
                string_mas_largo = strings[i];
            }
        }
    }    
    return string_mas_largo;
}

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga