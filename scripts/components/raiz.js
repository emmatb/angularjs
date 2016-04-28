// Componente raíz
angular.module("cookbok")
       .component("raiz", {
           // Con templateUrl se referencia la vista asociada al componente
           templateUrl: "views/raiz.html",
           // Con el controller se establece la lógica del componente
           controller: function (ServicioRecetas) {
               // Publicamos en el $scope la lista de recetas que se obtiene del servicio
               this.recetas = ServicioRecetas.obtenerRecetas();

               // Guarda el contexto del controlador, el contexto actual
               var self = this;

               // Publicamos en el $scope la función para crear una receta
               self.crearReceta = function() {

                   // Objeto receta
                   var receta = {
                       "titulo" : self.tituloReceta
                   }
                   // Se crea la nueva receta
                   ServicioRecetas.crearReceta(receta);

                   // Se refresca la lista de recetas
                   self.recetas = ServicioRecetas.obtenerRecetas();

                   // Se limpia el input
                   self.tituloReceta = "";
               };

               self.eliminarReceta = function (indice) {

                   ServicioRecetas.eliminarReceta(indice);

                   self.recetas = ServicioRecetas.obtenerRecetas();
               }
           },
           // Los bindings
           bindings: {
               
           }
       });