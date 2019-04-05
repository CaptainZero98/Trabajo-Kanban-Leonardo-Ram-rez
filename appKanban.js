//Creamos el módulo y el controlador
angular.module("kanbanApp", []).controller("kanbanController", function ($scope) {
    //Creamos una instancia del controlador para empezara trabajar
    var kanbanCtrl = this;

    var index = 0;

    kanbanCtrl.tasks = [];//Declaramos el arreglo tasks en Angular

    kanbanCtrl.demo = "one";

    kanbanCtrl.show = function () {//Funcion de show para mostrar datos

        console.log($scope.demoView);//Se imprime el demoView del lado del cliente
    }

    kanbanCtrl.add = function () {//Funcion add para agregar datos al arreglo
        var taskTmp = { index: index, name: $scope.newobj.name, desciption: $scope.newobj.Desc, status: 1 }//Se llena el objeto con el scope
        kanbanCtrl.tasks.push(taskTmp);//Se mete al arreglo el objeto llenado por el usuario
        index++;//Se aumenta el index
        $scope.newobj = {}

        console.log(taskTmp);
        // $scope.newobj = {};//Obtiene el valor de newobj

    }

    kanbanCtrl.incrementa = function (indice) {

        console.log(kanbanCtrl.tasks[indice].status);
        if (kanbanCtrl.tasks[indice].status < 3) {//Se compara que el status no esté al 3 status

            kanbanCtrl.tasks[indice].status++;//Aumentamos el valor al status
        }

    }
    kanbanCtrl.decrementa = function (indice) {//Función necesaria para el cecremento d elas tareas

        console.log(kanbanCtrl.tasks[indice].status);//Evaluamos el status actual del elemento en cuestión
        if (kanbanCtrl.tasks[indice].status > 1 && kanbanCtrl.tasks[indice].status < 3) {//Se compara que el status no esté al 1 status

            kanbanCtrl.tasks[indice].status--;//Decrementamos en uno el valor del status
        }

    }
});


