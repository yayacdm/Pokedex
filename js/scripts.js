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

/* ORIGINAL CODE LOOP
for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >6) {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") - Wow, that’s big!<br>")
  } else {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") <br>")
  }
}
*/

pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + '- Height: ' + pokemon.height + ', Type: ' + pokemon.type + '<br>');
});
