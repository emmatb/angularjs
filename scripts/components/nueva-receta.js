// Componente 'nueva-receta' para mostar el formulario de crear una nueva receta
angular.module("cookbook")
    .component("nuevaReceta", {
        templateUrl: "views/nueva-receta.html",
        bindings: {
            $router: "<"
        },
        controller: function (ServicioRecetas) {
            var self = this;

            // Obtenemos la lista de recetas.
            self.$onInit = function () {

                self.receta = {
                    titulo: "",
                    ingredientes: []
                };

            };

            // Añadir ingrediente a la nueva receta
            self.agregrarIngrediente = function (ingrediente) {
                self.receta.ingredientes.push(ingrediente);
            };

            // Crea una nueva receta.
            self.crearReceta = function() {

                debugger;

                // Compruebo que la caja de texto tenga valor.
                if (self.receta.tituloReceta) {

                    // Llamamos al servicio para crear la receta.
                    ServicioRecetas.crearReceta(self.receta).then(
                        // Este manejador se ejecuta cuando la petición fue correcta
                        function(respuesta) {
                            // Actualizamos la lista de recetas.
                            self.$router.navigate(["/MisRecetas"]);
                        },
                        // Este manejador se ejecuta cuando la petición causó un error
                        function (respuesta) {
                            alert("Error al crear receta " + respuesta);
                        }
                    );

                }
            };
        }
    });
