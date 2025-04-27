// Productos y precios
const productos = [
    { nombre: "Aqua", precio: 200 },
    { nombre: "Emoción", precio: 180 },
    { nombre: "Alegría", precio: 160 },
    { nombre: "Frescura", precio: 150 }
  ];
  
  // Vendedores
  const vendedores = [
    { nombre: "Juana", ventas: [0, 0, 0, 0], total: 0 },
    { nombre: "Pedro", ventas: [0, 0, 0, 0], total: 0 }
  ];
  
  // Función para registrar ventas
  function registrarVentas() {
    vendedores.forEach(vendedor => {
      vendedor.ventas = []; // Reiniciamos
      vendedor.total = 0;
  
      productos.forEach(producto => {
        let cantidad = prompt(`¿Cuántos perfumes "${producto.nombre}" vendió ${vendedor.nombre}?`);
  
        // Validar que sea un número
        while (isNaN(cantidad) || cantidad === "" || cantidad === null) {
          alert("Por favor ingresa un valor numérico válido.");
          cantidad = prompt(`¿Cuántos perfumes "${producto.nombre}" vendió ${vendedor.nombre}?`);
        }
  
        cantidad = parseInt(cantidad);
        vendedor.ventas.push(cantidad);
        vendedor.total += cantidad * producto.precio;
      });
    });
  
    console.log("✅ Ventas registradas correctamente.");
  }
  
  // Función para mostrar resultados
  function mostrarResultados() {
    console.clear();
    console.log("=== Resultados de ventas ===");
  
    vendedores.forEach(vendedor => {
      console.log(`👤 ${vendedor.nombre}`);
      productos.forEach((producto, index) => {
        console.log(`- ${producto.nombre}: ${vendedor.ventas[index]} vendidos`);
      });
      console.log(`💰 Total vendido: $${vendedor.total} USD\n`);
    });
  
    // Comparar totales para sacar al empleado del mes
    if (vendedores[0].total > vendedores[1].total) {
      console.log(`🎉 El empleado del mes es: ${vendedores[0].nombre}`);
    } else if (vendedores[1].total > vendedores[0].total) {
      console.log(`🎉 El empleado del mes es: ${vendedores[1].nombre}`);
    } else {
      console.log("🤝 ¡Empate! Ambos vendieron lo mismo.");
    }
  }