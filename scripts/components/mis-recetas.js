// Componente 'mis-recetas' que muestra la colección de recetas
angular.module("cookbook")
       .component("misRecetas", {
           templateUrl: "views/mis-recetas.html",
           // Con controller establecemos la lógica del componente.
           // Al inyectar $filter se pueden utilizar todos los filtros que expone angular
           // y los filtros propios
           controller: function (ServicioRecetas, $filter, $pubsub) {
               var self = this;

               // Obtenemos la lista de recetas.
               self.$onInit = function () {

                   // Lanzamos el evento SeccionNavegada para indicar que
                   // se acaba de mover a esta sección. Nofica al componente padre
                   $pubsub.$publish("SeccionNavegada", "MisRecetas");

                   // Toda operación asíncrona en Angular es una promesa
                   // Promesa - puntero donde después estará la respuesta
                   ServicioRecetas.obtenerRecetas().then(
                       // Este manejador se ejecuta cuando la petición fue correcta
                       // El servicio ha devuelto un código de OK - 200, 300
                       function (respuesta) {
                           self.recetas = respuesta.data;
                       },
                       // Este manejador se ejecuta cuando la petición causó un error
                       // El servicio ha devuelto un código KO - 400, 500
                       function (respuesta) {
                           alert("Error al obtener las recetas " + respuesta);
                       }
                   )
               };

               // Eliminamos la receta indicada.
               self.eliminarReceta = function(id) {

                   // Llamamos al servicio para eliminar la receta con el identificador indicado
                   ServicioRecetas.eliminarReceta(id).then(
                       // Este manejador se ejecuta cuando la petición fue correcta
                       function(respuesta) {
                           // Buscamos la receta eliminada en la colección
                           // Filtro creado en ejecución al vuelo :D
                           var borrada = $filter("filter")(self.recetas,  {"id": id});

                           // Se comprueba que se haya encontrado la receta
                           if (borrada.length === 1) {
                               // Se obtiene el índice de la receta en la lista
                               var index = self.recetas.indexOf(borrada);
                               // Se elimina de la colección
                               self.recetas.splice(index, 1);
                           }

                       },
                       // Este manejador se ejecuta cuando la petición causó un error
                       function (respuesta) {
                           alert("Error al borrar receta" + respuesta);
                       }
                   );
               };
           }
       });