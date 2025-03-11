/*
Iteradores

Un iterador es un concepto que se repite, y en ambito de la programacion 
se suele referir a algo que te permite recorreer una estructura de datos.

En muchos casos, se precenta la situacion en la que necesitas recorrer un objeto a traves de
las propiedades de su estructura, como si fuera los elementos de un array 

*/
//Creamos un objeto
const alejandro= {

    name: 'Edgar',
    lifeL: 99,
    power:100,
    talk: function () {
        return 'Hola';
    }

};


console.log(Object.keys('Este es un '+alejandro));

console.log('Y este es un '+alejandro);
console.log(Object.values('Devuelve un'+alejandro));
console.log(Object.entries('y este que hace'+alejandro));

console.log('Hola esta bien conectado');

//Creamos los condicionales

let nameV1, edad;
nameV1 = prompt('Proporcioname tu nombre');
age = Number(prompt('Proporciname tu nombre'));

if(age >= 18){
    if (nameV1 == 'Carlos'|| nameV1 == 'Alejandro') {

        console.log('Puedes ingresar ');

        alert('Puedes ingresar a la zona VIP ');

        
    }
    else{

        alert('Solo ingresa a la zona normal');
    }

}else{

    document.write('No puedes ingresar no eres mayor de edad');
    alert('No puedes ingresar, no eres mayor de edad');
    
}

/*Caso switch */


// switch(expresion){

//     case valor1:
//         break

//         case valor2:
//             break
// }

var Calificacion;
Calificacion=prompt('Ingresa la calificacion ');


    switch (Calificacion){
        case "A":
          alert('Excelente calificacion');

          break;
        
          case 'B':
            alert('Buena calificación');
            break;

         case 'C':
         alert('Media calificación');
         break;

         
         case 'D':
         alert('Mala calificación');
         break;

         

    }

