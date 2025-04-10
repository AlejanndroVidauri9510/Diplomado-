function verificarRespuesta(){
    let respuesta = document.getElementById('respuesta').value.toLowerCase();
    if (respuesta == 'si'|| respuesta==='si') {
        alert('Ciertamente ');

        
    }else if(respuesta === 'no'){

        alert('No te creo');
    }else{

        alert('+Por favor responde con un "si" o un "no". ');
    }
}