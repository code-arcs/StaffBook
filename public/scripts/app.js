(function () {

    angular.module('staffbook', [
        'ngMaterial'
    ]);


    angular.module('staffbook')
        .directive('crewList', ['$mdDialog', '$mdMedia', crewList])
        .directive("colorMe", function () {
            return {
                restrict: 'EA',
                replace: false,
                link: function (scope, element) {
                    var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                    element.css('background-color', color);

                }
            }
        });
    function crewList($mdDialog) {
        return {
            restrict: 'E',
            templateUrl: '/scripts/views/crew.html',
            link: function (scope) {
                var colors =  ["pink", "blue", "purple", "deepBlue", "lightPurple", "yellow", "green", "red"];
                console.log(colors[Math.floor(Math.random() *colors.length) + 1]);
                scope.tiles = [
                    {name: "Hans Wurst", date: new Date(2016, 0, 27), background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(),  background: colors[Math.floor(Math.random() *colors.length) + 1]}
                ]

                scope.showDetail = function (member,ev) {
                    function DialogController($scope, $mdDialog) {
                        $scope.member = member;
                        $scope.hide = function() {
                            $mdDialog.hide();
                        };
                    }
                    $mdDialog.show({
                        controller: DialogController,
                        templateUrl: 'scripts/views/detail.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true
                    })
                        .then(function (answer) {
                            scope.status = 'You said the information was "' + answer + '".';
                        }, function () {
                            scope.status = 'You cancelled the dialog.';
                        });

                };

                scope.hasBirthday = function(bDate) {
                    var date =  new Date();
                    return bDate.getFullYear() === date.getFullYear() && bDate.getDate() === date.getDate() && bDate.getMonth() === date.getMonth();
                }

            }
        };
    }


})();
