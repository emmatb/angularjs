/**
 * Servicio de recetas
 */

angular.module("cookbok")
    .service("ServicioRecetas", function () {

        // Recuperar lista de recetas
        this.obtenerRecetas = function () {
           return [{
               "titulo": "Solomillo al Pedro Ximénez"
           }, {
               "titulo": "Pasta con piñones"
           }, {
               "titulo": "Risotto milanese"
           }];
        };
    });