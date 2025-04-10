let number = null;
do{
    number =Number(prompt('Ingresa un numero del 1 al 10'));
    console.log(number);
    document.write('El nmero es ' + number)
}while(number> 10 || number<1);


//ciclo For

let tbala = 12;

for (let index = 1; index <=10; index++) {      
    
    console.log(index);
    
    if (index === 6) {

    }
    console.log(index, 'X', tbala, '=' , index * tbala);
    document.write(index, 'X', tbala, '=' , index * tbala);
}





