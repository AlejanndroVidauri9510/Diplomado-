function Verificar(){

    let dia= document.getElementById('dia');
    let mensaje = document.getElementById('mensaje');

    switch(dia){

        case 'lunes':
            mensaje.textContent='Animo, empieza la semana';
            mensaje.style.color='blue 😃';
            break;
        case 'Viernes':
                mensaje.textContent= 'Por fin ya es viernes! Se biene el fin de semana ';
                mensaje.style.color ='green';
            break;
        case 'Sabado ':
        case 'Domingo':
            mensaje.textContent= 'Es fin de semana a ponerce una pedota 😆🎉🎊🍻';
            mensaje.style.color = 'yellow';
            break;
        case ' ':
            mensaje.textContent= 'Por favor ingresa un dia 👽';
            mensaje.style.color= 'red';
            break;

        default:
            mensaje.textContent= 'Es un dia normal de la semana';
            mensaje.style.color= 'gray';


    }

}