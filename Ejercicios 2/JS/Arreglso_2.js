function convertirStringAArray(){

    const input = prompt('Ingresa valores separados por coma (ej: 1,2, 3, 4');

    if (input !== null && input.trim() !=="") {
        const array = input.split(' , ').map( val => val.trim());
        //Convertir los números si son validos 
        const result = array.map(item =>{
            const num = Number(item);
            return isNaN(num) ? item : num;


        });
        console.log('Array result: ', result);
        document.getElementById('mensajes').textContent= 'Array convertido. Revisa la consola.';
        
        }else{

            document.getElementById("mensajes").textContent = "No se ingresó ningún valor.";
        }
        
    }
