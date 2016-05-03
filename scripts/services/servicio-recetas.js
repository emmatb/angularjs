/**
 * Servicio de recetas
 */

angular.module("cookbook")

    .service("ServicioRecetas", function ($http) {

        // Inyectamos un cliente http para realizar
        // peticiones AJAX
        
           // Crear una nueva receta
           this.crearReceta = function (receta) {

               /* // Se obtiene la colección
            var recetas = this.obtenerRecetas();
            // Se añade la nueva receta
            recetas.push(receta);
            // Serializamos la colección
            var cadenaConRecetas = JSON.stringify(recetas);
            // Se almacena la nueva receta
            localStorage.setItem("recetas", cadenaConRecetas);*/

            return $http.post("http://127.0.0.1:8000/api/recetas/", receta);
        };

        // Recuperar lista de recetas
        this.obtenerRecetas = function () {
            // Se obtienen las recetas del almacén de la app

            /* Versión antigua usando Local Storage

            var cadenaConRecetas = localStorage.getItem("recetas");

            var recetas = cadenaConRecetas? JSON.parse(cadenaConRecetas) : []; */

           return $http.get("http://127.0.0.1:8000/api/recetas");
        };

        // Eliminar receta
        this.eliminarReceta = function (id) {

           /* // Se obtiene la colección de recetas
            var recetas = this.obtenerRecetas();

            // Se elimina la receta
            if (indice > -1) {
                recetas.splice(indice, 1);

                // Serializamos la colección
                var cadenaConRecetas = JSON.stringify(recetas);
                // Se almacena la nueva receta
                localStorage.setItem("recetas", cadenaConRecetas);
            }*/
            return $http.delete("http://127.0.0.1:8000/api/recetas/" + id);

        };
    });