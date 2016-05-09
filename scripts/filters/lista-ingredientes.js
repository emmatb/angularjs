
// Filtro 'ListaIngredientes'. Dada una lista de ingredientes, construye una cadena de texto.
angular
    .module("cookbook")
    .filter("ListaIngredientes", function() {

        // Los filtros siempre retornan una función. Además, siempre tiene (al menos)
        // un parámetro de entrada, que es el dato que recibirá el formato.
        return function(ingredientes) {

            var salida;

            if (ingredientes && ingredientes.length > 0) {

                var nombres = ingredientes.map(function(ingrediente) {
                    return ingrediente.nombre;
                });

                salida = nombres.join(", ");
            }
            else {

                salida = "";
            }

            return salida;
        };
    });