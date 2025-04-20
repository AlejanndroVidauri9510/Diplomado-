const palabras = [];

function capturarPalabra() {
  const input = document.getElementById("palabra");
  const valor = input.value.trim();

  if (valor === "") {
    alert("Captura finalizada. Haz clic en 'Mostrar Resultado'.");
    input.disabled = true;
    return;
  }

  palabras.push(valor);
  input.value = "";
  input.focus();
}

function mostrarConcatenacion() {
  const resultado = document.getElementById("resultado");

  if (palabras.length === 0) {
    resultado.textContent = "No se capturaron palabras.";
  } else {
    resultado.textContent = palabras.join(" ");
  }
}
