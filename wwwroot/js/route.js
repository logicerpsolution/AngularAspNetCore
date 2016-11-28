app.config(function ($routeProvider) {
    $routeProvider.when("/",
      {
          templateUrl: "../views/peoples/peoples.html",
          controller: "PersonCtrl"
      }
    ).when("/AddPerson", {
        templateUrl: "../views/peoples/AddNewPerson.html",
        controller: "AddNewPersonCtrl"
    }).when("/EditPerson/:id", {
        templateUrl: "../views/peoples/AddNewPerson.html",
        controller: "AddNewPersonCtrl"
    }).otherwise({
        redirectTo: '/'
    });

})

app.constant("appconfig", { rootURL: "http://localhost:5000/", apiVersion: "api" });