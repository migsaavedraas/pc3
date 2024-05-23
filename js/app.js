$(document).ready(function() {
    
    const apiURL = 'data/pokemon.json';

    
    function getColorByType(tipo) {
        switch(tipo) {
            case 'planta': return 'planta';
            case 'fuego': return 'fuego';
            case 'electrico': return 'electrico';
            case 'normal': return 'normal';
            default: return '';
        }
    }

    
    function renderEntrenadores(entrenadores) {
        console.log('Datos de entrenadores recibidos:', entrenadores);

        entrenadores.forEach(entrenador => {
            console.log('Entrenador:', entrenador);

            let entrenadorDiv = $('<div class="entrenador"></div>');
            entrenadorDiv.append(`<h2>${entrenador.entrenador}</h2>`);
            
            entrenador.pokemons.forEach(pokemon => {
                console.log('Pokemon:', pokemon);

                let pokemonDiv = $(`
                    <div class="pokemon ${getColorByType(pokemon.tipo)}">
                        <img src="${pokemon.foto}" alt="${pokemon.nombre}">
                        <span class="nombre">${pokemon.nombre}</span>
                    </div>
                `);
                entrenadorDiv.append(pokemonDiv);
            });

            $('#entrenadores').append(entrenadorDiv);
        });
    }

    
    $.getJSON(apiURL, function(data) {
        renderEntrenadores(data);
    }).fail(function() {
        alert('Error al cargar los datos de los entrenadores.');
    });
});
