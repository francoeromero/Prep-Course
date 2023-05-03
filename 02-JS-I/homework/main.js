function esVocal(letra){
    letra = prompt('Ingrese una vocal: ');
    while(letra.length > 1){
      letra = prompt('Dato incorrecto!, reingrese la vocal: ');
    }
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
      return console.log('Es vocal');
    }
    else{
      return console.log('Dato incorrecto');
    }
  }
