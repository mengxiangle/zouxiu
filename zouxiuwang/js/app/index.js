/**
 * Created by Administrator on 2017/5/5.
 */
var app = angular.module("myApp",["ui.router","main","login"]);

app.config(["$sceDelegateProvider","$stateProvider","$urlRouterProvider",
    function ($sceDelegateProvider,$stateProvider,$urlRouterProvider) {
    //    设置白名单
        $sceDelegateProvider.resourceUrlWhitelist([
            "self",
            "http://datainfo.duapp.com/**"
        ]);
        //进行路由配置
        $stateProvider.state({ //首页
            name:"index",
            url:"/index",
            template:"<main-comp></main-comp>"
        }).state({              //登录
            name:"login",
            url:"/login",
            template:"<login-comp></login-comp>"
        }).state({
            name:"login.page2",
            url:"/page2",
            templateUrl:"component/login/page2.html"
        }).state({
            name:"login.page3",
            url:"/page3",
            templateUrl:"component/login/page3.html"
        });

    //    进行默认页面设置
        $urlRouterProvider.otherwise("/index");
    }]);

