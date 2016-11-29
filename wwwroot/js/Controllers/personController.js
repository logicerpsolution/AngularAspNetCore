app.controller("PersonCtrl", function ($scope, PersonFactory) {

    $scope.PersonList = [];
    PersonFactory.getPerson().then(function (response) {
        $scope.PersonList = response;
    });

    $scope.RemovePerson = function (id) {
        PersonFactory.removePerson(id).then(function (response) {
            $scope.PersonList = _.without($scope.PersonList, _.findWhere($scope.PersonList, { id: id }));
        });
    }
});