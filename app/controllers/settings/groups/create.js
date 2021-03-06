angular.module('pimaticApp.settings').controller('GroupsCreateController', ["$scope", "$location", "toast", function ($scope, $location, toast) {
    $scope.group = {};

    $scope.cancel = function ($event) {
        $event.preventDefault();
        $location.path('settings/groups');
    };

    $scope.save = function () {
        $scope.store.add('groups', $scope.group).then(function () {
            $location.path('settings/groups');
        }, function (message) {
            toast.error('Saving group failed: ' + message);
        });
    };
}]);