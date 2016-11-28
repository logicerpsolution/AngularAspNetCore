
app.factory("AddressFactory", function ($q, $http, appconfig) {
    return {
        removeAddress: function (id) {
            var deffered = $q.defer();
            $http({
                method: "DELETE", url: appconfig.rootURL + appconfig.apiVersion + "/Address/" + id,
            }).then(function successCallback(response) {
                deffered.resolve(response.data);
            }, function errorCallback(response) {
                deffered.reject(response.data);
            });
            return deffered.promise;
        }

    };
});