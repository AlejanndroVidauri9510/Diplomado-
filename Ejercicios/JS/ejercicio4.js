
function CompararNumeros(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = document.getElementById('Resultado');

    if (num1 ==="" || num2 ==="") {
        resultado.textContent = 'Ingrese ambos numeros';
        resultado.style.color='red';
        return;        
    }
    num1 = Number(num1);
    num2 = Number(num2);

    if (num1 === num2) {
        resultado.textContent = 'Los nunmeros son iguales, ingresa valores diferentes.';
        resultado.style.color ='orange';                
    }else if (num1< num2) {
        resultado.textContent =`El numero menor es: ${num1} 1️⃣`;
        resultado.style.color = 'green';

                
    }else{

        resultado.textContent =`El numero menor es: ${num2} 2️⃣`;
        resultado.style.color = 'green';
    
    }

}
