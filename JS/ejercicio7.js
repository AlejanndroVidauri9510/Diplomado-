function EvaluarCalificacion(){
    const input = document.getElementById ('calificacion').value.trim();
    const resultado = document.getElementById('resultado');
    const calificacion = Number(input);

    if (isNaN(calificacion)|| input ===' ') {
        resultado.textContent= ' Por favor ingresa un numero ';
        resultado.style.color= 'red';

        return;
    }
    if (calificacion<1 || calificacion > 10 ) {
        resultado.textContent= 'Error: la calificacion debe de estar entre el 1 y el 10';
        resultado.style.color= 'red';
                
    }else if(calificacion <6 && cali){
        resultado.textContent= 'Reprobado 😡 ';
        resultado.style.color='red';
        
    }else if (calificacion >6 && calificacion <=8) {
        resultado.textContent= 'Regular';
        resultado.style.color= 'blue';

        
    }
    else if (calificacion === 9) {
        resultado.textContent= 'Bien';
        resultado.style.color= 'green';
        
        
    }else if (calificacion === 10) {
        resultado.textContent= 'Bien';
        resultado.style.color= 'golden';
        
        
    }



}