/**
 * Controlador de recetas
 */
angular.module("cookbok")
       .controller("recetas", ["$scope", "ServicioRecetas", function ($scope, ServicioRecetas) {
           // Publicamos en el $scope la lista de recetas que se obtiene del servicio
           $scope.recetas = ServicioRecetas.obtenerRecetas();

           // Publicamos en el $scope la función para crear una receta
           $scope.crearReceta = function() {

               // Objeto receta
               var receta = {
                   "titulo" : $scope.tituloReceta
               }
               // Se crea la nueva receta
               ServicioRecetas.crearReceta(receta);

               // Se refresca la lista de recetas
               $scope.recetas = ServicioRecetas.obtenerRecetas();

               // Se limpia el input
               $scope.tituloReceta = "";
           };

           $scope.eliminarReceta = function (indice) {

               ServicioRecetas.eliminarReceta(indice);

               $scope.recetas = ServicioRecetas.obtenerRecetas();
           }
       }]);