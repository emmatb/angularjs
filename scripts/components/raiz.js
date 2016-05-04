
// Componente raíz.
angular
    .module("cookbook")
    .component("raiz", {
        // Con templateUrl referenciamos la vista asociada al componente.
        templateUrl: "views/raiz.html",
        // Con controller establecemos la lógica del componente.ç
        // Al inyectar $filter se pueden utilizar todos los filtros que expone angular
        // y los filtros propios
        controller: function(ServicioRecetas, $filter) {

            var self = this;

            // Obtenemos la lista de recetas.
            self.$onInit = function () {

                // Se inicia la colección de ingredientes
                self.ingredientesNuevaReceta = [];

                // Toda operación asíncrona en Angular es una promesa
                // Promesa - puntero donde después estará la respuesta
                ServicioRecetas.obtenerRecetas().then(
                    // Este manejador se ejecuta cuando la petición fue correcta
                    // El servicio ha devuelto un código de OK - 200, 300
                    function (respuesta) {
                        self.recetas = respuesta.data;
                    },
                    // Este manejador se ejecuta cuando la petición causó un error
                    // El servicio ha devuelto un código KO - 400, 500
                    function (respuesta) {
                        alert("Error al obtener las recetas " + respuesta);
                    }
                )
            }
            
            // Añadir ingrediente a la nueva receta
            self.agregrarIngrediente = function (ingrediente) {
                ingredientesNuevaReceta.push(ingrediente);
            }

            // Crea una nueva receta.
            self.crearReceta = function() {

                // Compruebo que la caja de texto tenga valor.
                if (self.tituloReceta) {

                    // Montamos el objeto receta con el título introducido.
                    var receta = {
                        titulo: self.tituloReceta,
                        ingredientes: self.ingredientesNuevaReceta
                    };
                    // Llamamos al servicio para crear la receta.
                    ServicioRecetas.crearReceta(receta).then(
                        // Este manejador se ejecuta cuando la petición fue correcta
                        function(respuesta) {
                            // Actualizamos la lista de recetas.
                            self.recetas.push(respuesta.data);

                            // Limpiamos la caja de texto.
                            self.tituloReceta = "";
                        },
                        // Este manejador se ejecuta cuando la petición causó un error
                        function (respuesta) {
                            alert("Error al crear receta " + respuesta);
                        }
                    );

                }
            };
            // Eliminamos la receta indicada.
            self.eliminarReceta = function(id) {

                // Llamamos al servicio para eliminar la receta con el identificador indicado
                ServicioRecetas.eliminarReceta(id).then(
                    // Este manejador se ejecuta cuando la petición fue correcta
                    function(respuesta) {
                        // Buscamos la receta eliminada en la colección
                        // Filtro creado en ejecución al vuelo :D
                        var borrada = $filter("filter")(self.recetas,  {"id": id});

                        // Se comprueba que se haya encontrado la receta
                        if (borrada.length === 1) {
                            // Se obtiene el índice de la receta en la lista
                            var index = self.recetas.indexOf(borrada);
                            // Se elimina de la colección
                            self.recetas.splice(index, 1);
                        }

                    },
                    // Este manejador se ejecuta cuando la petición causó un error
                    function (respuesta) {
                        alert("Error al borrar receta" + respuesta);
                    }
                );
            };
        }
    });