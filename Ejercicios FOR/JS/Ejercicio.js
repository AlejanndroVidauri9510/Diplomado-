for (let index = 1; index <=50 ; index++) {
    if(index% 2 !==0 ){
        console.log(index);
        

    }
    
}


const pokemons = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon",
    "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie",
    "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill",
    "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate",
    "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu",
    "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina",
    "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy",
    "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff",
    "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume",
    "Paras", "Parasect", "Venonat", "Venomoth", "Diglett"
  ];

  function mostrarPokemons() {
    const inputNumero = document.getElementById('numero').value;
    const numero = parseInt(inputNumero);
    const lista = document.getElementById('listaPokemons');
    lista.innerHTML = "";
  
    if (isNaN(numero) || numero < 1) {
      alert('Por favor ingresa un número válido mayor a 0.');
      return;
    }
  
    for (let i = 1; i <= numero && i <= pokemons.length; i++) {
      if (i % 5 === 0) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = pokemons[i - 1]; // -1 porque los arrays inician en 0
        lista.appendChild(li);
      }
    }
  }
  