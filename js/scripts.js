/*
let pokemonList = [
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
*/
/* ORIGINAL CODE LOOP
for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >6) {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") - Wow, that’s big!<br>")
  } else {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") <br>")
  }
}
*/

//ADDING IIFE
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
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

//CALL FOR POKEMON LIST
/*
pokemonList.forEach(function(pokemonRepository.getAll)) {
  document.write(pokemon.name + '- Height: ' + pokemon.height + ', Type: ' + pokemon.type + '<br>');
});
Object.keys(anne).forEach(function(property) {
  document.write(property + ': ' + anne[property] + '<br>');
});
*/

document.write(pokemonRepository.getAll() );
