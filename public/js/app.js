$.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
  var pokemons = response.results;
  agregarPokemons(pokemons);
});

var agregarPokemons = function(pokemons){
  pokemons.forEach(function(pokemon){
  $("#lista-pokemones").append(  $("<li />").text(pokemon.name));
});

};
