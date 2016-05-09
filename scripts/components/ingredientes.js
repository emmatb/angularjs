
//  Componente ingredientes. Listamos los ingredientes de cada receta
angular.module("cookbook").component("ingredientes", {
    templateUrl: "views/ingredientes.html",
    bindings: {
        ingredientes: "<",
        alAgregarIngrediente: "&"
    },
    controller: function () {
        var self = this;

            // Nuevo
            self.alPulsarTecla = function (evento) {

                debugger;

                // Obtenemos el código de la tecla pulsada
                // Si evento.wich tiene valor será asignado a tecla
                // si no se guardará el valor de keyCode
                // Necesario para compatibilidad con navegadores antiguos
                var tecla = evento.which || evento.keyCode;

                if (tecla === 13) {
                    // Creo el objeto ingrediente
                    var ingrediente = {
                        nombre: self.nuevoIngrediente,
                        cantidad: 1
                    };

                    // Notifico el ingrediente hacia el componente padre
                    self.alAgregarIngrediente({
                        "ingrediente": ingrediente
                    });
                }
        };
    }
})