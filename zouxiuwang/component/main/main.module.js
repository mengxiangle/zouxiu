/**
 * Created by Administrator on 2017/5/5.
 */
var main = angular.module("main",[]);

main.component("mainComp",{
    templateUrl:"component/main/main.template.html",
    controller:(["$scope","$http",function ($scope,$http) {
        $(".head_nav li:eq(5)").children("a").css("color", "red");
        $scope.tab = function ($e) {
            $(".head_nav li").addClass("head_active");
        };
        $scope.goodslist = [];
        $http({
            method:"JSONP",
            url:"http://datainfo.duapp.com/shopdata/getGoods.php"
        }).then(
            function(resp) {
                console.log("请求成功", resp);
                $scope.goodslist = resp.data;
            },
            function (resp) {
                console.log("系统繁忙");
            }
        );
    }])

});






