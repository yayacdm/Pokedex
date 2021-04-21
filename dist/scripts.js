let pokemonRepository = (function() {
  let t = [],
    e = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function n(e) {
    'object' == typeof e && t.push(e);
  }
  function o(t) {
    pokemonRepository.loadDetails(t).then(function() {
      let e = $('.modal-body'),
        n = $('.modal-title');
      n.empty(), e.empty();
      let o = $('<h1>' + t.name + '</h1>'),
        i = $('<img class="modal-img" style="width:50%">');
      i.attr('src', t.imageUrl);
      let a = $('<p>Height: ' + t.height + '</p>'),
        l = document.createElement('span'),
        r = 'Types: ';
      t.types.forEach(function(t) {
        r += t.type.name + ' ';
      }),
        (l.innerHTML = r),
        n.append(o),
        e.append(i),
        e.append(a),
        e.append(l),
        $('#pokemonModal').modal('toggle');
    });
  }
  return {
    add: n,
    getAll: function() {
      return t;
    },
    addListItem: function(t) {
      let e = document.querySelector('.list-group'),
        n = document.createElement('li');
      n.classList.add('list-group-item', 'list-group-item-action');
      let i = document.createElement('button');
      (i.innerText = t.name),
        i.classList.add('btn', 'btn-block'),
        i.setAttribute('data-target', '#pokemonModal', 'data-toggle', 'modal'),
        e.appendChild(n),
        n.appendChild(i),
        i.addEventListener('click', function() {
          o(t);
        });
    },
    loadList: function() {
      return fetch(e)
        .then(function(t) {
          return t.json();
        })
        .then(function(t) {
          t.results.forEach(function(t) {
            n({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function(t) {
          /* eslint-disable no-console */
          console.error(t);
          /* eslint-enable no-console */
        });
    },
    loadDetails: function(t) {
      let e = t.detailsUrl;
      return fetch(e)
        .then(function(t) {
          return t.json();
        })
        .then(function(e) {
          (t.imageUrl = e.sprites.front_default),
            (t.height = e.height),
            (t.types = [...e.types]);
        })
        .catch(function(t) {
          /* eslint-disable no-console */
          console.error(t);
          /* eslint-enable no-console */
        });
    },
    showDetails: o
  };
})();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(t) {
    pokemonRepository.addListItem(t);
  });
});
