angular.module("shiny",["ngRoute"]);
angular.module("shiny").config(function ($routeProvider) {
    $routeProvider.when('/main',{
        templateUrl:'templ/main.html',
        controller:"mainCtr"
    }).when('/contains',{
        templateUrl:"templ/contains.html",
        controller:"containsCtr"
    }).when('/last',{
        templateUrl:"templ/last.html",
        controller:"lastCtr"
    }).otherwise({
        redirectTo:"/main"
    })

})
//创建 controller
angular.module("shiny").controller("mainCtr",function ($scope,$http) {
    $http.get('data/say.json').then(function (resonpse) {
        $scope.says=resonpse.data;
    })
})
angular.module("shiny").controller("containsCtr",function ($scope,$http) {
    $scope.comming=1;
    setTimeout(function () { 
        $scope.$apply(function () {
            parseInt($val+Math.ceil(Math.random()*10));
            divcome.css({width:""+$val+"%"});
            console.log($val)
            if($val>=99){
                $val=100
                clearInterval(timer)

            }
        })

    },1000)
    $http.get('data/contains.json').then(function (resonpse) {
        $scope.contains=resonpse.data;
    })
})
angular.module("shiny").controller("lastCtr",function () {

})
angular.module("shiny").controller("shinyCtr",function ($scope) {
    $scope.flag="main";
})