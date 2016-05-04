
//  Componente ingredientes. Listamos los ingredientes de cada receta
angular.module("cookbook").component("ingredientes", {
    templateUrl: "views/ingredientes.html",
    bindings: {
        ingredientes: "<",
        alAgregarIngrediente: "&"
    },
    controller: function () {
        var self = this;
        
        self.crearIngrediente = function () {
            
            // Creo el objeto ingrediente
            var ingrediente = {
                nombre: self.ingrediente,
                cantidad: 1
            };
            
            // Notifico el ingrediente hacia el componente padre
            self.alAgregarIngrediente({
                "ingrediente": ingrediente
            });
        }
    }
})