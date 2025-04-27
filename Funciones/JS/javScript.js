function cambiarSemaforo() {
    let color = "rojo";
    const luz = document.getElementById("luz");
  
    setInterval(() => {
      if (color === "rojo") {
        color = "verde";
        luz.src = "https://i.postimg.cc/SN51cRMz/verde.png"; // verde
      } else if (color === "verde") {
        color = "amarillo";
        luz.src = "https://i.postimg.cc/Gp1mcK0G/amarillo.png"; // amarillo
      } else if (color === "amarillo") {
        color = "rojo";
        luz.src = "https://i.postimg.cc/9f7d10Mx/rojo.png"; // rojo
      }
    }, 2000);
  }
  
  cambiarSemaforo();