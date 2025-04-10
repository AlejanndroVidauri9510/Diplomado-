function VerificarDisivilidad(){
    
    let numero = document.getElementById('numero').value;
    let resultado= document.getElementById('Resultado');

    if(numero ===" "){
        resultado.textContent ='Por favor, ingresa un numero';
        resultado.style.color = 'red';
        return;
    }

    numero = Number(numero); //Convierte el valor en nunero
    if (numero % 2 === 0) {
        resultado.textContent = `${numero} es divicible entre d2. `;
        resultado.style.color= 'green';
        
    } else {

        resultado.textContent =`${numero} no es divisible entre 2. `
        resultado.style.color= 'red';
        
    }
}