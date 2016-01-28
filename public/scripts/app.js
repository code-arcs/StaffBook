(function () {

    angular.module('staffbook', [
        'ngMaterial'
    ]);


    angular.module('staffbook')
        .directive('crewList', [crewList])
        .directive("colorMe", function () {
            return {
                restrict: 'EA',
                replace: false,
                link: function (scope, element) {
                    var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                    element.css('background-color', color);

                }
            }
        });function crewList() {
        return {
            restrict: 'E',
            templateUrl: '/scripts/views/crew.html',
            link: function (scope) {
                scope.tiles = [
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }},
                    {title: "Name", span: { row : 1, col : 1 }}
                ]

            }
        };
    }




})();
