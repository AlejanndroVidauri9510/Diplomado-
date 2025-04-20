function MostrarMultiplos() {
    const numero = parseInt(document.getElementById("numero").value);
    const lista = document.getElementById("Resultado");
  
    lista.innerHTML = ""; // Limpiar resultados anteriores
  
    if (isNaN(numero) || numero < 1) {
      alert("Por favor, introduce un número válido mayor que 0.");
      return;
    }
  
    let i = 1;
    while (i <= numero) {
      if (i % 5 === 0) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = i;
        lista.appendChild(li);
      }
      i++;
    }
  }