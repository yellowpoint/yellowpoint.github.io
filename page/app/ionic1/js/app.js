



angular.module('starter',['ionic','starter.controllers'])

    .config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {


        $ionicConfigProvider.platform.ios.tabs.style('standard');   /*背景颜色值*/
        $ionicConfigProvider.platform.ios.tabs.position('bottom');   /*导航位置*/
        $ionicConfigProvider.platform.android.tabs.style('standard');  /*背景颜色值*/
        $ionicConfigProvider.platform.android.tabs.position('standard'); /*导航位置*/

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        // /*返回按钮的图标*/
        // $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        // $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        /*转场效果*/
        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

        // $ionicConfigProvider.backButton.previousTitleText(false);   /*去掉返回按钮自带的  上一个导航名称*/
        $ionicConfigProvider.backButton.text('');











        $stateProvider
            
            
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            //首页
            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/tabs-home.html',
                        controller: 'homeCtrl'
                    }
                }
            })

            //首页详情页
            .state('tab.home-detail', {
                url: '/home-detail/:id',
                views: {
                    'tab-home': {
                        templateUrl: 'templates/tabs-home-detail.html',
                        controller: 'homeDetailCtrl'
                    }
                }
            })


            //论坛页面
            .state('tab.bbs', {
                url: '/bbs',
                views: {
                    'tab-bbs': {
                        templateUrl: 'templates/tabs-bbs.html',
                        controller: 'bbsCtrl'
                    }
                }
            })

            .state('tab.bbs-detail', {
                url: '/bbs-detail/:id',
                views: {
                    'tab-bbs': {
                        templateUrl: 'templates/tabs-bbs-detail.html',
                        controller: 'bbsDetailCtrl'
                    }
                }
            })

            // 我的页面
            .state('tab.my', {
                url: '/my',
                views: {
                    'tab-my': {
                        templateUrl: 'templates/tabs-my.html',
                        controller: 'myCtrl'
                    }
                }
            })




        $urlRouterProvider.otherwise('/tab/home');

    })







