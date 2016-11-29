
app.controller("AddNewPersonCtrl", function ($scope, $routeParams, PersonFactory, AddressFactory) {


    if (_.isUndefined($routeParams.id)) {
        $scope.AddNewPersonFrom = { firstname: "", lastname: "", addresses: [{ City: "", Street: "", index: 0 }] };
        $scope.actionButton = "Add new person";

    } else {
        $scope.actionButton = "Update person";
        $scope.personId = $routeParams.id;
        PersonFactory.getPersonDetail($routeParams.id).then(function (response) {
            $scope.AddNewPersonFrom = response;
        });
    }

    $scope.AddNewAddress = function () {
        $scope.AddNewPersonFrom.addresses.push({ city: "", street: "", index: $scope.AddNewPersonFrom.addresses.length + 1 })
    }
    $scope.RemoveAddress = function (id, currentLocalId) {
        debugger;
        if (_.isUndefined(id)) {
            $scope.AddNewPersonFrom.addresses = _.without($scope.AddNewPersonFrom.addresses, _.findWhere($scope.AddNewPersonFrom.addresses, { index: currentLocalId }));
        } else if (!_.isUndefined(id) && !_.isUndefined($routeParams.id)) {
            AddressFactory.removeAddress(id).then(function (response) {
                $scope.AddNewPersonFrom.addresses = _.without($scope.AddNewPersonFrom.addresses, _.findWhere($scope.AddNewPersonFrom.addresses, { id: id }));
            });
        }
    }


    $scope.AddNewPerson = function () {
        debugger;
        if (_.isUndefined($routeParams.id)) {
            PersonFactory.addPerson($scope.AddNewPersonFrom).then(function (response) {
                $scope.AddNewPersonFrom = { firstname: "", lastname: "", addresses: [{ city: "", street: "", index: 0 }] };
            });

        } else {
            //$scope.AddNewPersonFrom.addresses = _.map($scope.AddNewPersonFrom.addresses, function (key) {
            //    delete key["id"];
            //    return key;
            //});

            PersonFactory.updatePersonDetail($scope.personId, $scope.AddNewPersonFrom).then(function (response) {
                debugger;
                //$scope.AddNewPersonFrom = { firstname: "", lastname: "", addresses: [{ city: "", street: "", index: 0 }] };
            });
        }



    }
});
