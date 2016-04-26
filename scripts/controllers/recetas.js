/**
 * Controlador de recetas
 */
angular.module("cookbok")
       .controller("recetas", ["$scope", "ServicioRecetas", function ($scope, ServicioRecetas) {
           // Publicamos en el $scope la lista de recetas que se obtiene del servicio
           $scope.recetas = ServicioRecetas.obtenerRecetas();
       }]);