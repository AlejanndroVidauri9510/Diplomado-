function calcularPago() {
    const programa = document.getElementById("programa").value;
    const beca = document.getElementById("beca").value;
    const resultado = document.getElementById("resultado");
  
    let precioMensual = 0;
    let duracion = 0;
  
    // Asignar precio y duración por programa
    switch (programa) {
      case "course":
        precioMensual = 4999;
        duracion = 2;
        break;
      case "carrera":
        precioMensual = 3999;
        duracion = 6;
        break;
      case "master":
        precioMensual = 2999;
        duracion = 12;
        break;
      default:
        resultado.innerHTML = "<span style='color:red'>Por favor selecciona un programa válido.</span>";
        return;
    }
  
    // Calcular descuento por beca
    let descuento = 0;
    if (beca === "facebook") descuento = 0.20;
    else if (beca === "google") descuento = 0.15;
    else if (beca === "jesua") descuento = 0.50;
  
    const precioConDescuento = precioMensual * (1 - descuento);
    const total = precioConDescuento * duracion;
  
    resultado.innerHTML = `
      <p>📘 Programa: <strong>${programa.charAt(0).toUpperCase() + programa.slice(1)}</strong></p>
      <p>🎓 Beca: <strong>${beca === "ninguna" ? "Sin beca" : "Beca " + beca.charAt(0).toUpperCase() + beca.slice(1)}</strong></p>
      <p>💰 Precio mensual con descuento: <strong>$${precioConDescuento.toFixed(2)} MXN</strong></p>
      <p>🧾 Total a pagar por ${duracion} meses: <strong>$${total.toFixed(2)} MXN</strong></p>
    `;
  }