/*
// ORIGINAL CODE LOOP
for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >6) {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") - Wow, that’s big!<br>")
  } else {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") <br>")
  }
}
// CALL FOR POKEMON LIST without IIFE
pokemonList.forEach(function(pokemonRepository.getAll)) {
  document.write(pokemon.name + '- Height: ' + pokemon.height + ', Type: ' + pokemon.type + '<br>');
});
*/

// IIFE
var pokemonRepository = (function () {
  var pokemonList = [
      {
        name: 'Bulbasaur',
        height: 2.04,
        type: ['Grass', ' Poison']
      },
      {
        name: 'Ivysaur',
        height: 3.03,
        type: ['Grass', ' Poison']
      },
      {
        name: 'Venusaur',
        height: 6.07,
        type: ['Grass', ' Poison']
      },
      {
        name: 'Charmander',
        height: 2,
        type: ['Fire']
      },
      {
        name: 'Charmeleon',
        height: 3.07,
        type: ['Fire']
      },
      {
        name: 'Charizard',
        height: 5.07,
        type: ['Fire', ' Flying']
      },
      {
        name: 'Squirtle',
        height: 1.08,
        type: ['Water']
      },
      {
        name: 'Wartortle',
        height: 3.03,
        type: ['Water']
      },
      {
        name: 'Blastoise',
        height: 5.03,
        type: ['Water']
      },
    ];

  function add(pokemon) {
    if (typeof pokemon === 'object') {
    pokemonList.push(pokemon);
  }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

// logs array to console
console.log(pokemonRepository.getAll() );

// calls pokemon list/details from inside IIFE
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon)
  });
