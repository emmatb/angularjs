// Directiva lista recetas

angular.module("cookbook")
        .directive("listaRecetas", function (ServicioRecetas) {
           // Las directivas devuelven siempre un objeto
            return {
                // Con restrict indicamos cómo se usará la directiva
                // E: se usa como elemento
                // A: se usa como atributo de un elemento
                // C: se usa como clase
                // D: se usa como comentario
                restrict:"EA",
                // Con scope establecemos la interfaz de comunicación
                // entre directiva y scope padre
                scope: {
                    // Con igual establecemos un enlace bidireccional
                    recetas: "=",
                    // Con & no suscribimos a eventos
                    botonEliminarPulsado: "&"
                },
                // En templateUrl establecemos la ruta del documento
                // HTML que tiene la vista de la directiva
                templateUrl: "views/lista-recetas.html",
                // En la fase link podemos establecer la lógica de la directiva
                // y manipular el DOM de la vista asociada.
                link: function (scope) {

                    // Notificamos al controlador que se pulsó el botón
                    // de eliminar de una receta.
                    scope.eliminarReceta = function(id) {
                        scope.botonEliminarPulsado({ "id": id });
                    };

                    // Se expone en el scope el servicio obtenerRutaImagen
                    // para poder utilizarlo en la vista
                    scope.obtenerRutaImagen = ServicioRecetas.obtenerRutaImagen;
                }
            }
        });