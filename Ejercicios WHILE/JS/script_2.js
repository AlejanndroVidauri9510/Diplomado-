function JugarLoteria(){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1)|| isNaN(num2)||
    num1 <1|| num1> 50 ||
    num2 <1 || num2>50) {
        alert('Introduce dos numeros de un rango dell 1 al 50');
        return;
    }

    console.clear();
        let i = 1;
        while (i <= 50) {
                if (i === num1 || i === num2) {
                    console.log(`${i} ¡Lotería!`);
                    
                    
                }else{
                    console.log(i);
                    
                }
                i++;
        }   
}