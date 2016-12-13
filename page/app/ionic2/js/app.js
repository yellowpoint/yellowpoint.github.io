

angular.module('starter',['ionic','starter.controllers'])

    .config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {


        $ionicConfigProvider.platform.ios.tabs.style('standard');   /*背景颜色值*/
        $ionicConfigProvider.platform.ios.tabs.position('bottom');   /*导航位置*/
        $ionicConfigProvider.platform.android.tabs.style('standard');  /*背景颜色值*/
        $ionicConfigProvider.platform.android.tabs.position('standard'); /*导航位置*/

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        /*转场效果*/
        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

        $ionicConfigProvider.backButton.text('');



        $stateProvider


            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            //主菜
            .state('tab.main', {
                url: '/main',
                views: {
                    'tab-main': {
                        templateUrl: 'templates/tabs-main.html',
                        controller: 'mainCtrl'
                    }
                }
            })
            //热菜
            .state('tab.hot', {
                url: '/hot',
                views: {
                    'tab-hot': {
                        templateUrl: 'templates/tabs-main.html',
                        controller: 'hotCtrl'
                    }
                }
            })
            //凉菜
            .state('tab.cold', {
                url: '/cold',
                views: {
                    'tab-cold': {
                        templateUrl: 'templates/tabs-main.html',
                        controller: 'coldCtrl'
                    }
                }
            })
            //汤品
            .state('tab.soup', {
                url: '/soup',
                views: {
                    'tab-soup': {
                        templateUrl: 'templates/tabs-main.html',
                        controller: 'soupCtrl'
                    }
                }
            })
            //点心
            .state('tab.dessert', {
                url: '/dessert',
                views: {
                    'tab-dessert': {
                        templateUrl: 'templates/tabs-main.html',
                        controller: 'dessertCtrl'
                    }
                }
            })
            //确认订单
            .state("notarize",{
                url:"/notarize",
                templateUrl: "templates/notarize.html",
                controller:'notarizeCtrl'
            })
            //继续点菜
            .state("continue",{
                url:"/continue",
                templateUrl: "templates/continue.html",
                controller:'continueCtrl'
            })



        $urlRouterProvider.otherwise('/tab/main');

    });







