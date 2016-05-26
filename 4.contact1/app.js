// 依赖于firebase
angular.module("shiny",["firebase"]);
// 注入friebaseArray
angular.module("shiny").controller("shinyCtr",function ($scope,$firebaseArray) {
    // 得到friebase云上面的数据库 
    var base=new Firebase("https://firsttesr.firebaseio.com/")
    var firebaseArray=$firebaseArray(base);
    console.log(firebaseArray)
    $scope.contacts=firebaseArray;
    $scope.contact={};
    $scope.addConrtactForm=false;
    $scope.subContact=function () {
       var id= $scope.contact.$id;
        if(id){
         firebaseArray.$save($scope.contact).then(function () {
             $scope.mag="修改成功"
         })
        }else{
            firebaseArray.$add($scope.contact).then(function(ref) {
                $scope.mag="联系人添加成功"
            });
        }
        $scope.contact={};
        $scope.addConrtactForm=false;
        setTimeout(function () {
            $scope.mag=undefined;
          
        },2000)

  return false
    }
    $scope.show=function (item) {
        $scope.contact=item;
        $scope.addConrtactForm=true;
    }

})
