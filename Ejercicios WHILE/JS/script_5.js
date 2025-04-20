function pedirDia() {
    let continuar = true;
  
    while (continuar) {
      const dia = prompt("Introduce un día de la semana (ej. lunes, martes, domingo)").toLowerCase();
  
      switch (dia) {
        case "lunes":
          alert("¡Ánimo! Es inicio de semana 💪");
          break;
        case "martes":
          alert("Vamos avanzando 📈");
          break;
        case "miércoles":
          alert("¡Mitad de semana! 😌");
          break;
        case "jueves":
          alert("Ya casi es viernes 😎");
          break;
        case "viernes":
          alert("¡Por fin viernes! 🎉");
          break;
        case "sábado":
          alert("¡Disfruta tu sábado! 🛌");
          break;
        case "domingo":
          alert("Ve a descansar 💤");
          continuar = false;
          break;
        default:
          alert("Ese no es un día válido. Intenta de nuevo.");
          break;
      }
    }
  }
  