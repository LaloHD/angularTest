(function () {
    'use strict';

    angular.module('app.directives', [])
        .directive('textAreaCounter', Directive);

    function Directive() {
        var directive = {
            restrict: 'E',
            controller: Controller,
            controllerAs: 'vm',
            templateUrl: 'app/textAreaCounter/textAreaCounter.tmpl.html'
        }

        function Controller() {

        }
        return directive;
    }

})();