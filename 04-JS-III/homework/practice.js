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

function partir(arreglo, cantidad){
    
    let grupos = [];
    // hacemos un bucle, que va dar vueltas segun la cantidad que se divide
    for (let i = 0; i < arreglo.length; i += cantidad) {
        // luego usammos slice para agarrar un fragmento  de la lista
        // del i hasta i + cantidad, 0, 2 y la otra vuelta 2, 4
        let grupo = arreglo.slice(i, i + cantidad);
        // y lo meto en la lista creada   
        grupos.push(grupo);
    }
    return grupos;
}
console.log(partir([1,2,3,4], 2))


// 3- Clase libro. Para este ejercicio definir una clase Libro con sus propiedades y metodos
// las propiedades de la clase libro son:

// titulo
// autor
// traducciones

// El constructor de la clase recibe esos tres datos por parametro
// Los metodos de la clase libro son: 

// getTitulo: permite obtener el titulo del libro
// getAutor: permite obtener el autor del libro
// getTraducciones retorna un arreglo con todos los idiomas de las traducciones
// addTraduccion a partir de los parametros recibidos agrega un objeto al arreglo de traducciones

// ejemplo:

/*
var traduccionesDeHp = {
    idioma: "español",
    editorial: "Santillana"
},
{
    idioma: "frances",
    editorial: "Mystique"
},
{
    idioma: "aleman",
    editorial: "Scholastic"
}
*/

class Libro {
    constructor(titulo, autor, traducciones){
        this.titulo = titulo;
        this.autor = autor;
        this.traducciones = traducciones;
    }

    getTitulo(){
        return this.titulo;
    }

    getAutor(){
        return this.autor;
    }

    getTraducciones(){
        return this.traducciones.map((e)=> e.idioma)
    }

    addTraduccion(idioma, editorial){
        this.traducciones.push(idioma, editorial)
    }
}