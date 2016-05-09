/**
 * Servicio de recetas
 */

angular.module("cookbook")

    .service("ServicioRecetas", function ($http, Configuracion) {

        // Inyectamos un cliente http para realizar
        // peticiones AJAX
        
           // Crear una nueva receta
           this.crearReceta = function (receta, imagen) {

               /* // Se obtiene la colección
            var recetas = this.obtenerRecetas();
            // Se añade la nueva receta
            recetas.push(receta);
            // Serializamos la colección
            var cadenaConRecetas = JSON.stringify(recetas);
            // Se almacena la nueva receta
            localStorage.setItem("recetas", cadenaConRecetas);*/

               // Se comprueba que la imagen ha sido indicada
               if (imagen) {

                   // Se crea un objeto datos de formulario
                   var datos = new FormData();

                   // Se añade la imagen a los datos del formulario
                   datos.append("imagen", imagen);

                   // Creamos un objeto de configuración. Necesitamos sobreescribir la cabecera
                   // Content-type que por defecto es 'application/json'
                   // Al indicar undefined, se infiere el tipo de contenido
                   var config = {
                       "headers": {
                           "Content-Type": undefined
                       }
                   }

                   // Se sube la imagen al servidor y nos devuelve la ruta de la imagen
                   var promesa =
                       $http
                        .post(Configuracion.urlServidor + "/upload",
                                datos,
                                config)
                        .then(
                          function (respuesta) {

                           // Asigno la ruta de la imagen subida al objeto 'receta'
                           receta.rutaImagen = respuesta.data.path;

                           return $http.post(Configuracion.urlServidor + "/api/recetas/", receta);
                       }
                   );
               }
               else {
                   var promesa =  $http.post(Configuracion.urlServidor + "/api/recetas/", receta);
               }

               return promesa;
        };

        // Recuperar lista de recetas
        this.obtenerRecetas = function () {
            // Se obtienen las recetas del almacén de la app

            /* Versión antigua usando Local Storage

            var cadenaConRecetas = localStorage.getItem("recetas");

            var recetas = cadenaConRecetas? JSON.parse(cadenaConRecetas) : []; */

           return $http.get(Configuracion.urlServidor +"/api/recetas");
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
            return $http.delete(Configuracion.urlServidor + "/api/recetas/" + id);

        };

        // Obtiene la ruta absoluta a las imágenes
        this.obtenerRutaImagen = function (rutaRelativa) {

            return rutaRelativa ? (Configuracion.urlServidor + "/" + rutaRelativa): null;
        }
    });