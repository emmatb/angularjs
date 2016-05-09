
// Componente raíz.
angular
    .module("cookbook")
    .component("raiz", {
        // Con templateUrl referenciamos la vista asociada al componente.
        templateUrl: "views/raiz.html",
        // Con controller establecemos la lógica del componente.
        // $rootRouter - router padre
        controller: function($rootRouter, $pubsub) {
            var self = this;

            self.$onInit = function () {
                self.misRecetasSeleccionada = true;
                self.nuevaRecetaSeleccionada = false;
            };

            // Suscripción a eventos
            // Recogemos el evento SeccionNavegada para recargar las
            // variables misRecetasSeleccionada y nuevaRecetaSeleccionada
            $pubsub.$subscribe("SeccionNavegada", function (datos) {
                self.misRecetasSeleccionada = datos === "MisRecetas";
                self.nuevaRecetaSeleccionada = datos === "NuevaReceta";
            });

            // Seleccionamos la pestaña 'Mis Recetas' y navegamos a dicha sección.
            self.navegarMisRecetas = function() {
                $rootRouter.navigate(["MisRecetas"]);
            };

            // Seleccionamos la pestaña 'Nueva Receta' y navegamos a dicha sección.
            self.navegarNuevaReceta = function() {
                $rootRouter.navigate(["NuevaReceta"]);
            };

        },
        // Con routeConfig se declaran las rutas a las que se puede
        // navegar en este componente, rutas de los componentes hijos
        $routeConfig: [{
            name: "MisRecetas",
            path: "/mis-recetas",
            component: "misRecetas",
            useAsDefault: true
        }, {
            name:"NuevaReceta",
            path: "/nueva-receta",
            component: "nuevaReceta"
        }]
    });