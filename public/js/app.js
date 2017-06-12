var plantillaPokemons = '<div class="col s6 m3" data-url="http://pokeapi.co/api/v2/pokemon-species/__numero-pokemon__/">' +
                          '<div class="card hoverable pokemones">' +
                          '<div class= "card-content center-align">' +
                          '<img class="responsive-img center" src="assets/img/__nombre-pokemon__.png" alt="img-pokemon">' +
                           '<h6><a href="#modal-__nombre-modal__">__nombre__</a></h6>' +
                           '</div>' +
                           '</div>' +
                           '</div>';

var plantillaModal = '<div class="modal-content">'+
                    		'<div class="col s12 m7">'+
                    			 '<h2 class="header">__pokemon__</h2>'+
                    			 ' <div class="card horizontal">'+
                    				 '<div class="card-image  ">'+
                    					'<img src="__pokemonImagen__" class="imagenModal responsive-img circle">'+
                    				 '</div>'+
                    				 '<div class="card-stacked">'+
                    					 	'<div class="card-content row">'+
                    						 '<p class="col s6">color:__color__</p>'+
                    						 '<p class="col s6">habitat:__habitat__</p>'+
                    						 '<p class="col s6">shape:__shape__</p>'+
                    						 '<p class="col s6">generacion:__generacion__</p>'
                    					 '</div>'+
                    				 '</div>'+
                    			 '</div>'+
                    		 '</div>'+
                    '</div>';

var cargarPagina = function () {
	$('.btn-floating').sideNav();

	$.getJSON("//pokeapi.co/api/v2/pokemon/", function (response) {
		var pokemons = response.results;
		crearPokemons(pokemons);
	});

};

var crearPokemons = function(pokemons){
  var plantillaFinalPokemons = "";
    pokemons.forEach( function (pokemon, index) {
		plantillaFinalPokemons += plantillaPokemons.replace("__nombre__", pokemon.name).replace("__nombre-pokemon__", pokemon.name).replace("__nombre-moda__", pokemon.name).replace("__numero-pokemon__", index+1).replace("__nombre-modal__",pokemon.name);

	});

	$("lista-pokemones").html(plantillaFinalPokemons);

}


// var obtenerDatos = function(pokemon,imagen){
//
// 	 var nombre = pokemon.names[0].name;
// 	 var color = pokemon.color.name;
// 	 var habitat = pokemon.habitat.name;
// 	 var forma = pokemon.shape.name;
// 	 var generacion = pokemon.generation.name;
// 	 var plantillaFinal ="";
// 	 plantillaFinal+=plantillaModal.replace('__nombreDePokemon__',nombre)
// 		 .replace('__color__',color)
// 		 .replace('__habitat__',habitat)
// 		 .replace('__shape__',forma)
// 		 .replace('__generacion__', generacion)
// 		 .replace('__imagenPokemon__',imagen);
// 		 $("#modalPokemon").html(plantillaFinal);
//  }
//
// var obtenerInformacionAdicional = function(){
// 			 var urlPokemonEspecie=$(this).data('urle').replace('pokemon','pokemon-species');
// 			 console.log(urlPokemonEspecie);
// 			 console.log($(this).data("img"));
// 			 var imagen = $(this).data("img");
// 			 $.getJSON(urlPokemonEspecie,function(response){
// 				 obtenerDatos(response,imagen);
// 			 });
//
// };
//
// var crearPokemons=function(pokemons) {
// 	plantillaPokemonFinal = "";
// 	pokemons.forEach(function (pokemon,a) {
// 		plantillaPokemonFinal+=plantillaPokemones.replace("__nombreDePokemon__",pokemon.name)
// 		.replace("__urlImagenPokemon__",imagenesPokemones[a])
// 		.replace("__url__",pokemon.url)
// 		.replace("__imgPokemon__",imagenesPokemones[a]);
// 	});
//
// 	$('#pokedex').html(plantillaPokemonFinal);
// }

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
