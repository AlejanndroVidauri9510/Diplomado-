function generarArray() {
    //creas el arreglo

    const numeros = [];
    //agregamos ciclo for 
    for (let i = 0; i < 10; i++) {
      const aleatorio = Math.floor(Math.random() * 100); // números entre 0 y 99
      numeros.push(aleatorio);
    }
  
    // Mostrar en pantalla
    document.getElementById("resultado").innerHTML = 
      "Array generado: <br><strong>[" + numeros.join(", ") + "]</strong>";
  }