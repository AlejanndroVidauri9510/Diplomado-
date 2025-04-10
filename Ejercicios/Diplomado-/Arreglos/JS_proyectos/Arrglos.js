 let numero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let suma=0;
 
//longitud del arreglo 

for (let i= 0; i < numero.length; i++) {

    for (let j = 0; j < numero.length; j++) {

        console.log((i+1) + ' X ' + numero[j] + ' = ' + (i+1)*(j+1));   
        
    }
    
}

/*
console.log('____________________')
El join nos permite ordenar los valores de forma veritical  
console.log(numero.join(' '));*/
        
/*promedio = suma/numero.length;

console.log(suma);

console.log(promedio);*/
//Abrir terminal control +shift + ñ
