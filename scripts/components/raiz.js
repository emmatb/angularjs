
// Componente raíz.
angular
    .module("cookbook")
    .component("raiz", {
        // Con templateUrl referenciamos la vista asociada al componente.
        templateUrl: "views/raiz.html",
        // Con controller establecemos la lógica del componente.
        // $rootRouter - router padre
        controller: function($rootRouter) {
            var self = this;


        },
        // Con routeConfig se declaran las rutas a las que se puede
        // navegar en este componente, rutas de los componentes hijos
        $routeConfig: [{
            name: "MisRecetas",
            path: "/mis-recetas",
            component: "misRecetas"
        }, {
            name:"NuevaReceta",
            path: "/nueva-receta",
            component: "nuevaReceta"
        }]
    });