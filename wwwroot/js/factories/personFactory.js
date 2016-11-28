
app.factory("PersonFactory", function ($q, $http, appconfig) {
    return {
        addPerson: function (PersonData) {
            var defer = $q.defer();
            $http({
                method: 'POST',
                url: appconfig.rootURL + appconfig.apiVersion + "/Person",
                data: PersonData
            }).then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorCallback(response) {
                defer.reject(response.data);
            });
            return defer.promise;
        },
        getPersion: function () {
            var deffered = $q.defer();
            $http({ method: "GET", url: appconfig.rootURL + appconfig.apiVersion + "/Person" }).then(function successCallback(response) {
                deffered.resolve(response.data);
            }, function errorCallback(response) {
                deffered.reject(response.data);
            });
            return deffered.promise;
        }
      , removePerson: function (id) {
          var deffered = $q.defer();
          $http({
              method: "DELETE", url: appconfig.rootURL + appconfig.apiVersion + "/Person/" + id,
          }).then(function successCallback(response) {
              deffered.resolve(response.data);
          }, function errorCallback(response) {
              deffered.reject(response.data);
          });
          return deffered.promise;
      }
     , getPersionDetail: function (id) {
         var deffered = $q.defer();
         $http({
             method: "GET", url: appconfig.rootURL + appconfig.apiVersion + "/Person/" + id,
         }).then(function successCallback(response) {
             deffered.resolve(response.data);
         }, function errorCallback(response) {
             deffered.reject(response.data);
         });
         return deffered.promise;

     }
    , updatePersionDetail: function (id, PersonData) {
        var deffered = $q.defer();
        $http({
            method: "PUT",
            url: appconfig.rootURL + appconfig.apiVersion + "/Person/" + id,
            data: PersonData
        }).then(function successCallback(response) {
            deffered.resolve(response.data);
        }, function errorCallback(response) {
            deffered.reject(response.data);
        });
        return deffered.promise;

    }

    };
});
