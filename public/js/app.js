var plantillaPokemons =   '<div class="container">'+
                          '<div class="row"'+
                          '<div class="col s6 m3 personaje" data-url="http://pokeapi.co/api/v2/pokemon-species/__numero-pokemon__/">' +
                          '<div class="card hoverable pokemones">' +
                          '<div class= "card-content center-align">' +
                          '<img class="responsive-img center img-pokemon" src="assets/img/__nombre-pokemon__.png" alt="img-pokemon" >' +
                           '<h6><a href="#modal1" class="nombre-pokemon">__nombre__</a></h6>' +
                           '</div>' +
                           '</div>' +
                           '</div>'+
                           '</div>'+
                           '</div>';
var imagenes = [
  'public/assets/img/beedrill.png','public/assets/ismg/blastoise.png','public/assets/img/bulbasaur.png',
  'public/assets/img/butterfree.png','public/assets/img/caterpie.png','public/assets/img/charizard.png',
  'public/assets/img/charmander.png', 'public/assets/img/charmeleon.png','public/assets/img/ivysaur.png',
  'public/assets/img/kakuna.png','public/assets/img/metapod.png','public/assets/img/pidgeot.png',
  'public/assets/img/pidgey.png','public/assets/img/pidgeotto.png','public/assets/img/raticate.png',
  'public/assets/img/rattata.png','public/assets/img/squirtle.png','public/assets/img/venusaur.png',
  'public/assets/img/wartortle.png','public/assets/img/weedle.png','public/assets/img/arbok.png','public/assets/img/clefable.png',
  'public/assets/img/clefairy.png','public/assets/img/ekans.png','public/assets/img/fearow.png','public/assets/img/jigglypuff.png',
  'public/assets/img/nidoking.png','public/assets/img/nidoqueen.png','public/assets/img/nidoran-m.png','public/assets/img/nidoran.png',
  'public/assets/img/nidorina.png','public/assets/img/nidorino.png','public/assets/img/ninetales.png','public/assets/img/pikachu.png',
  'public/assets/img/raichu.png','public/assets/img/sandshrew.png','public/assets/img/sandslash.png','public/assets/img/apearow.png',
  'public/assets/img/vupix.png','public/assets/img/wigglytuff.png'
];
var cargarPagina = function () {
	$('.btn-floating').sideNav();
  $('.modal').modal();
  $('#siguiente').click(siguientePokemon);
	$.getJSON("//pokeapi.co/api/v2/pokemon/", function (response) {
		var pokemons = response.results;
    var nextUrl = response.next
    $('#siguiente').attr("data-url",nextUrl);
		crearPokemons(pokemons);
    $(document).on("click",".personaje",datos);
	});

};

var siguientePokemon = function(){
  var url = $('#siguiente').data('url');
  $.getJSON(url, function(response){
    var nextUrl = response.next;
    console.log(nextUrl);
    $('#siguiente').data("url",nextUrl);
    var pokemons = response.results;
    crearPokemons(pokemons);
    datos();
  });
};

var crearPokemons = function(pokemons){
  var plantillaFinalPokemons = "";
    pokemons.forEach( function (pokemon, index) {
		plantillaFinalPokemons += plantillaPokemons.replace("__nombre__", pokemon.name)
    .replace("__nombre-pokemon__", pokemon.name)
    .replace("__nombre-modal__", pokemon.name)
    .replace("__numero-pokemon__", index+1)
    .replace("__nombre-modal__",pokemon.name);

	});

	$("#lista-pokemones").html(plantillaFinalPokemons);

}

var datos = function(){
  var url = ($(this).data("url"));
  console.log($(this));
  var nombrePokemon = $(this).text();
  $.getJSON(url, function(response){
    var pokemonColor = response.color.name;
    var pokemonHabitat = response.habitat.name;
    var pokemonShape = response.shape.name;
    var pokemonGeneracion = response.genera[0].genus;

    crearModal(nombrePokemon,pokemonColor,pokemonHabitat,pokemonShape,pokemonGeneracion);
  });

};

var crearModal = function(nombrePokemon,pokemonColor,pokemonHabitat,pokemonShape,pokemonGeneracion){
    $("#nombre").text(" " + nombrePokemon);
    $("#color").text(" " + pokemonColor);
    $("#habitat").text(" " + pokemonHabitat);
    $("#shape").text(" " + pokemonShape);
    $("#generacion").text(" " + pokemonGeneracion);
};

$(document).ready(cargarPagina);

//Primer acercamiento al ejercicio
// $.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
//   var pokemons = response.results;
//   agregarPokemons(pokemons);
// });
//
// var agregarPokemons = function(pokemons){
//   pokemons.forEach(function(pokemon){
//   $("#lista-pokemones").append(  $("<li />").text(pokemon.name));
// });
//
// };
