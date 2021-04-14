let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 2.04,
    type: ['grass', 'poison']
  },
  {
    name: 'Ivysaur',
    height: 3.03,
    type: ['grass', 'poison']
  },
  {
    name: 'Venusaur',
    height: 6.07,
    type: ['grass', 'poison']
  },
  {
    name: 'Charmander',
    height: 2,
    type: ['fire']
  },
  {
    name: 'Charmeleon',
    height: 3.07,
    type: ['fire']
  },
  {
    name: 'Charizard',
    height: 5.07,
    type: ['fire', 'flying']
  },
  {
    name: 'Squirtle',
    height: 1.08,
    type: ['water']
  },
  {
    name: 'Wartortle',
    height: 3.03,
    type: ['water']
  },
  {
    name: 'Blastoise',
    height: 5.03,
    type: ['water']
  },
];

for (let i=0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >6) {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") - Wow, that’s big!<br>")
  } else {
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") <br>")
  }
}
