// Componente 'nueva-receta' para mostar el formulario de crear una nueva receta
angular.module("cookbook")
    .component("nuevaReceta", {
        templateUrl: "views/nueva-receta.html",
        bindings: {
            $router: "<"
        },
        controller: function (ServicioRecetas, $pubsub) {
            var self = this;

            // Obtenemos la lista de recetas.
            self.$onInit = function () {

                // Lanzamos el evento SeccionNavegada para indicar que
                // se acaba de mover a esta sección. Nofica al componente padre
                $pubsub.$publish("SeccionNavegada", "NuevaReceta");

                self.receta = {
                    titulo: "",
                    ingredientes: []
                };

                self.imagen = null;

            };

            // Añadir ingrediente a la nueva receta
            self.agregrarIngrediente = function (ingrediente) {
                self.receta.ingredientes.push(ingrediente);
            };

            // Seleccionamos una imagen para la receta
            self.imagenSeleccionada = function (imagen) {
              self.imagen = imagen;
            };

            // Crea una nueva receta.
            self.crearReceta = function() {

                debugger;

                // Compruebo que la caja de texto tenga valor.
                if (self.receta.titulo) {

                    // Llamamos al servicio para crear la receta.
                    ServicioRecetas.crearReceta(self.receta, self.imagen).then(
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
