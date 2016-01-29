(function () {

    angular.module('staffbook', [
        'ngMaterial'
    ]);

    angular.module('staffbook')
        .directive('crewList', ['$mdDialog', '$mdToast', '$document', crewList])
        .directive("colorMe", function () {
            return {
                restrict: 'EA',
                replace: false,
                link: function (scope, element) {
                    var colors =  ["#f5f5f5", "#b9f6ca", "#ffff8d", "#84ffff", "#80d8ff", "#448aff", "#b388ff", "#8c9eff", "#ff8a80", "#ff8a80"];
                    var color = colors[Math.floor(Math.random() * colors.length) + 1];

                    element.css('background-color', color);
                    element.find('md-icon').css('color', tinycolor(color).tetrad()[2]);

                }
            }
        });

    function crewList($mdDialog,$mdToast, $document) {
        return {
            restrict: 'E',
            templateUrl: '/scripts/views/crew.html',
            link: function (scope) {
                var colors =  ["pink", "blue", "purple", "deepBlue", "lightPurple", "yellow", "green", "red"];
                console.log(colors[Math.floor(Math.random() *colors.length) + 1]);
                scope.users = [
                    {name: "Hans Wurst", date: new Date(2016, 0, 27), background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,29),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,29),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]},
                    {name: "Hans Wurst", date: new Date(1987,0,28),  background: colors[Math.floor(Math.random() *colors.length) + 1]}
                ];

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
                    });
                };



                scope.usersHaveBirthday = function() {
                    var bList = scope.users.filter(function(user) {
                        return scope.hasBirthday(user.date);
                    });
                    scope.showBirthdayToast(bList);
                }

                scope.hasBirthday = function(bDate) {
                    var date =  new Date();
                    return bDate.getDate() === date.getDate() && bDate.getMonth() === date.getMonth();

                }

                scope.showBirthdayToast = function(bList) {
                    function ToastController($scope,$mdToast) {
                        $scope.bList = bList;
                        $scope.closeToast = function() {
                            $mdToast.hide();
                        };
                    }
                    $mdToast.show({
                        controller: ToastController,
                        templateUrl: 'scripts/views/toast.tmpl.html',
                        parent : $document[0].querySelector('#toaster'),
                        hideDelay: 6000,
                        position: 'top right'
                    });
                };
                scope.usersHaveBirthday();
            }
        };
    }
})();
