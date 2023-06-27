// 1- Deberas escribir una funcion que recibe como argumento dos arreglos de actividades (strings) y retorna un nuevo arreglo con las actividades(strings) que tengan en comun ambos arreglos(personas)

// ejemplo:
// const persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];

// const persona2 = ['comer', 'dormir', 'futbol'];

// actividadesEnComun(persona1, persona2)

// debe retornar:

// ['comer', 'dormir'];




function actividadesEnComun(persona1, persona2){
    let lista_en_comun =[]
    for(let i = 0; i < persona2.length; i++){
        if(persona1.includes(persona2[i])){
            lista_en_comun.push(persona2[i]);
        }
    }
    return lista_en_comun;
}

console.log(actividadesEnComun(['leer', 'comer', 'pasear', 'dormir', 'jugar'], ['comer', 'dormir', 'futbol']))


// otra forma: 

// function actividadesEnComun(persona1, persona2){
//     let list_en_comun =[]
//     for(const e of persona1){
//         if(persona2.includes(e)){
//             list_en_comun.push(e);
//         }
//     }
//     return list_en_comun;
// }


// otra forma: 

// function actividadesEnComun(persona1, persona2){
//     let enComun = [];
//     let listaMasGrande;
//     let listaMasChica;
    
//     if(persona1.length > persona2.length){
//         listaMasGrande = persona1;
//         listaMasChica = persona2;
//     }
//     else{
//         listaMasGrande = persona2;
//         listaMasChica = persona1;
//     }

//     for(let i = 0; i < listaMasChica.length; i++){
//         for(let a = 0; a < listaMasGrande.length; a++){
//             if(listaMasChica[i] === listaMasGrande[a]){
//                 enComun.push(listaMasChica[i]);
//             }
//         }
//     }
//     return enComun;
// }

// console.log(actividadesEnComun(['leer', 'comer', 'pasear', 'dormir', 'jugar'], ['comer', 'dormir', 'futbol']))

// --------------------------------------------------

// 2- Escribe una funcion que permita dividir un arreglo de enteros en varias partes de manera que cada parte tenga como maximo una cantidad definida de elementos (que va a recibir como parametro)

