/**
 * Servicio de recetas
 */

angular.module("cookbok")
    .service("ServicioRecetas", function () {

        // Crear una nueva receta
        this.crearReceta = function (receta) {

            // Se obtiene la colección
            var recetas = this.obtenerRecetas();
            // Se añade la nueva receta
            recetas.push(receta);
            // Serializamos la colección
            var cadenaConRecetas = JSON.stringify(recetas);
            // Se almacena la nueva receta
            localStorage.setItem("recetas", cadenaConRecetas);
        };

        // Recuperar lista de recetas
        this.obtenerRecetas = function () {
            // Se obtienen las recetas del almacén de la app
            var cadenaConRecetas = localStorage.getItem("recetas");

            var recetas = cadenaConRecetas? JSON.parse(cadenaConRecetas) : [];

           return recetas;
        };

        // Eliminar receta
        this.eliminarReceta = function (indice) {

            // Se obtiene la colección de recetas
            var recetas = this.obtenerRecetas();

            // Se elimina la receta
            if (indice > -1) {
                recetas.splice(indice, 1);

                // Serializamos la colección
                var cadenaConRecetas = JSON.stringify(recetas);
                // Se almacena la nueva receta
                localStorage.setItem("recetas", cadenaConRecetas);
            }
        };
    });