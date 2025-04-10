function calcularTotal() {
    const vehiculo = document.getElementById("vehiculo").value;
    const kms = parseFloat(document.getElementById("kms").value);
    const litros = parseFloat(document.getElementById("litros").value);
    const resultado = document.getElementById("resultado");
  
    if (!vehiculo || isNaN(kms) || isNaN(litros)) {
      resultado.innerHTML = `<span style="color:red">Por favor, completa todos los campos correctamente.</span>`;
      return;
    }
  
    let precioKm = 0;
    switch (vehiculo) {
      case "coche":
        precioKm = 0.20;
        break;
      case "moto":
        precioKm = 0.10;
        break;
      case "autobus":
        precioKm = 0.50;
        break;
      default:
        resultado.innerHTML = `<span style="color:red">Tipo de vehículo no válido.</span>`;
        return;
    }
  
    let extraLitros = litros > 100 ? 10 : 5;
  
    const costoPorDistancia = precioKm * kms;
    const total = costoPorDistancia + extraLitros;
  
    resultado.innerHTML = `
      <p>🚗 Vehículo: <strong>${vehiculo.charAt(0).toUpperCase() + vehiculo.slice(1)}</strong></p>
      <p>📏 Kilómetros: <strong>${kms}</strong></p>
      <p>⛽ Litros consumidos: <strong>${litros}</strong></p>
      <p>💸 Total a pagar: <strong>$${total.toFixed(2)} MXN</strong></p>
    `;
  }
  