function CompararNumeros(){

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    let resultado = document.getElementById('Resultado');

    if (num1 === ' ' || num2 === ' ' || num3 === '') {
        
        resultado.textContent ='Ingrese los numeros.'
        resultado.style.color='red';
        return;
        
    }
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let mayor = Math.max(num1, num2, num3);

    if (num1 === num2 && num2 === num3) {
        resultado.textContent = 'Los tres numeros son iguales.';
        resultado.style.color = 'orange';
            
    }

    else if ((num1 === num2 && num1 == mayor )|| 
             (num2 === num3 && num2 == mayor )||
             (num1 === num3 && num1 == mayor )){
               
             resultado.textContent =`Hay un empaque en el numero mayor : ${mayor} `;
             resultado.style.color = 'blue';


    }else{
        resultado.textContent = `El numero mayor es ${mayor}`;
        resultado.style.color = 'green';

    }


}