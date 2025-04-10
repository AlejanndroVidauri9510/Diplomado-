function CalcularPrecio(){
    
    const topping =document.getElementById('toping').value;
    
    const resultado = document.getElementById('resultado');
    
    const precioBase=50;

    let precio_final=precioBase;
    let mensaje = " ";

    switch(topping){
        case 'oreo':
            precio_final +=15;
            mensaje= `Has elegido topping de Oreo. Precio total: $${precio_final} MXN.`;
            break;
        case "kitkat":
            precio_final += 15;
            mensaje =  `Has elegido topping de KitKat. Precio total: $${precio_final} MXN.`
            break;
        case "brownie":
            precio_final += 20;
            mensaje = `Has elegido topping de Brownie. Precio total: $${precio_final} MXN.`;
            break;
        default:
             mensaje = "No tenemos este topping, lo sentimos. ";
             mensaje += `Precio del helado sin topping: $${precioBase} MXN.`;
            break;            


    }


}