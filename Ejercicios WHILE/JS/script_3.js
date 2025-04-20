const numerosCapturados=[];

function captrarNumeros() {
    const input = document.getElementById('numero');
    const valor = parseInt(input.value);

    if (isNaN(valor)) {
        alert('Por favor introduce un numero.');
        return;
    }

    if (valor === 0) {
        alert('Captura finalizada. Haz click en "Mostrar lista" para ver los numeros.');
        input.disabled= true;
        return;
                
    }

    numerosCapturados.push(valor);
    input.value = " ";
    input.focus();

}

function mostrarLista(){

    const lista =document.getElementById('lista');
    lista.innerHTML = ' ';

    if (numerosCapturados.length === 0) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = 'No se capturaron nunmeros. ';
        lista.append(li);
        return;             

    }
    numerosCapturados.forEach((num)=>{
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = num;
        lista.appendChild(li);
    });
    
}

