/**
 * Created by Administrator on 2017/5/5.
 */
var login = angular.module("login",[]);

login.component("loginComp",{
    templateUrl:"component/login/login.template.html",
    controller:(["$scope","$http","$location",function ($scope,$http,$location) {
        $scope.loginFn = function () {
            $http({
                method:"get",
                url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                params:{status:"login",userID:$scope.username,password:$scope.password}
            }).then(function (resp) {
                    console.log("请求成功",resp);
                    if (resp.data instanceof Object){
                        console.log("登录成功，跳转到首页");
                        $location.path("/index")
                    }else{
                        console.log("密码或者账号有误")
                    }
                },
                function (resp) {
                    console.log("系统繁忙")
                });
        }
    }])
});