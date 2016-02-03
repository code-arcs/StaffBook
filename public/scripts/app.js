(function () {

    angular.module('staffbook', [
        'ngMaterial'
    ]);

    angular.module('staffbook')
        .directive('crewList', ['$mdDialog', '$mdToast', '$document', 'MemberService', crewList])
        .directive("colorMe", function () {
            return {
                restrict: 'EA',
                replace: false,
                link: function (scope, element) {
                    var colors = ["#f5f5f5", "#b9f6ca", "#ffff8d", "#84ffff", "#80d8ff", "#448aff", "#b388ff", "#8c9eff", "#ff8a80", "#ff8a80"];
                    var color = colors[Math.floor(Math.random() * colors.length) + 1];

                    element.css('background-color', color);
                    element.find('md-icon').css('color', tinycolor(color).tetrad()[2]);

                }
            }
        })
        .factory('MemberService', ['$http', '$q', MemberService]);

    function crewList($mdDialog, $mdToast, $document, MemberService) {
        return {
            restrict: 'E',
            templateUrl: '/scripts/views/crew.html',
            link: function (scope) {

                MemberService.getAllMember()
                    .then(function (_users) {
                        scope.users = _users.data;
                    });

                scope.showDetail = function (member, ev) {
                    function DialogController($scope, $mdDialog) {
                        $scope.member = member;
                        $scope.hide = function () {
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


                scope.hasBirthday = function (_date) {
                    var dateNow = new Date();
                    var bDate = new Date(_date);
                    return bDate.getDate() === dateNow.getDate() && bDate.getMonth() === dateNow.getMonth();                //
                }

                scope.showBirthdayToast = function (bList) {
                    function ToastController($scope, $mdToast) {
                        $scope.bList = bList;
                        $scope.closeToast = function () {
                            $mdToast.hide();
                        };
                    }

                    $mdToast.show({
                        controller: ToastController,
                        templateUrl: 'scripts/views/toast.tmpl.html',
                        parent: $document[0].querySelector('#toaster'),
                        hideDelay: 6000,
                        position: 'top right'
                    });
                };
                scope.usersHaveBirthday = function () {
                    var bList = scope.users.filter(function (user) {
                        return scope.hasBirthday(user.date);
                    });

                    if (bList.length > 0) {
                        scope.showBirthdayToast(bList);
                    }
                }
                scope.usersHaveBirthday();
            }
        };
    }

    function MemberService($http, $q) {
        return {
            getAllMember: getAllMember
        }

        function getAllMember() {
            return $http.get('http://localhost:3000/users');
        }
    }
})();
