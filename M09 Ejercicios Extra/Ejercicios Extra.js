/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   //"x" es la Propiedad en el objeto
   var array = [];
   
  for (let x in objeto){
    array.push([x, objeto[x]])
    }
    return array;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let obj= {};
  for(let i = 0; i< string.length; i++){
    if(Object.keys(obj).includes(string[i])){
      obj[string[i]] +=1
    }
    else obj[string[i]] = 1;
  }
  return obj;
  




}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var minus = "";
   var mayus = "";
   for (i=0; i<string.length;i++){
      if(string[i].toUpperCase() === string[i]){ 
         mayus= mayus + string[i];
      }
      else minus =minus+string[i];
      
   }
   return mayus + minus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   
   var phrase = frase.split(" ")
   .map(function(element){return element.split("").reverse().join("");})
   .join(" ")
  return phrase;
     
   
   
   
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var snumero = numero.toString();
   var invertida = "";
   invertida = snumero.split("").reverse().join("");
   if (snumero === invertida){
      return "Es capicua";
   } 
   return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var narray = "";
   
   for (i=0; i< string.length; i++){
   
      if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c"){
         narray = narray + string[i];
      }}
   
   
   return narray;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   //probar con forEach
   for (var i = 0; i<arrayOfStrings.length; i++){
      for (var j= i+1; j<arrayOfStrings.length;j++){
        if(arrayOfStrings[j].length< arrayOfStrings[i].length)
        {var aux= arrayOfStrings[j];
        arrayOfStrings[j]= arrayOfStrings[i];
        arrayOfStrings[i]=aux;
  }
      }
    }
    return arrayOfStrings;
   }
   


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var narray =[];
for (i=0; i<array1.length;i++){
   for (j=0 ; j<array2.length; j++){
      if (array1[i] === array2[j]){
         narray.push(array1[i]);
      }
   }
}
return narray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
