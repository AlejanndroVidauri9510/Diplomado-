function Verificar_Cliente() {
    let cliente = document.getElementById("cliente").value;
    let resultado = document.getElementById("Resultado");

    if (cliente === "") {
        resultado.textContent = "Por favor, ingresa un número de cliente.";
        resultado.style.color = "red";
        return;
    }

    cliente = Number(cliente); // Convertir el valor a número

    if (cliente === 1000) {
        resultado.textContent = "🎉 ¡Ganaste un premio! 🎉";
        resultado.style.color = "green";
    } else {
        resultado.textContent = `Cliente ${cliente}: Lo sentimos, sigue participando.`;
        resultado.style.color = "red";
    }
}
