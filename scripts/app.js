/**
 * Çonfiguración principal angular
 * Módulo ngComponentRouter - Single Page Application
 */
angular.module("cookbook", ["ngComponentRouter"]);

// Configuramos el enrutado de HTML5
angular.module("cookbook").config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});

