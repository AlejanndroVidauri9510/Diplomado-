//Condicional Switch 

/*
La estructura de control switch permite definir casos especificos   
a realizar cuando la variable expuesta como condición
Ejemplo
*/

let  nota=0;

nota= Number(prompt('Ingresa la calificacion del alumno'));

switch(nota){
    case 10:
    alert( 'Sobresaliente ');
    break;
    case 9:
    case 8:        
    alert('Notable');
    break;
    case 7:
    case 6:    
    alert('Aceptable');
    case 5:
        alert('Reprobable');


}

/*
    Operador Condicional Ternario

    El operador ternario es una alternativa al condicional if/else
    de una forma mas compacta y breve, que en muchos casos resulta más legible.
*/
let user = confirm('Estas registrado');

let msj ='tu entrada te cuesta ' + (user ? '$30' : '$100');

console.log(msj);
console.log(user);

let nota2 =0

nota2=Number(prompt('Ingresa el valor de la nota'));

document.write('Eh realizado mi examen, el resultado que tuve fue el siguiente:  ');
//Creas otra variable con la condicional ternario
//alt + 60 sacas el simbolo "<"
// alt + 62 sacas el simbolo ">" 
let cal2 = nota2< 50 ? 'Suspendido':'Aprobable';

document.write(cal2);