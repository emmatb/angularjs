/**
 * Çonfiguración principal angular
 * Módulo ngComponentRouter - Single Page Application
 * Módulo ng-pubsub -
 */
angular.module("cookbook", ["ngComponentRouter", "dahr.ng-pubsub", "dahr.ng-image-picker"]);

// Configuramos el enrutado de HTML5
angular.module("cookbook").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});
