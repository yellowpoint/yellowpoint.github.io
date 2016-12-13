
angular.module('starter.controllers', ['starter.services'])


    .controller('homeCtrl',['$scope','HomeFactory',function ($scope,HomeFactory) {

        $scope.hasLoading = true;

        $scope.$on('HomeFactoryUpdate',function(event,data){   //接收数据
            $scope.items = data;
            $scope.hasLoading=false;
            // console.log(data);
            $scope.$broadcast('scroll.infiniteScrollComplete');  /*绑定数据 在广播*/
        });

        //加载更多
        $scope.loadMore=function(){
            HomeFactory.loadMore();
        };
        
        $scope.hasData=function(){
            return HomeFactory.hasData();
        }

    }])


    .controller('homeDetailCtrl',['$scope','$state','$stateParams','$http','$ionicActionSheet',function ($scope,$state,$stateParams,$http,$ionicActionSheet) {

        $scope.id=$stateParams.id;
        $scope.hasLoading = true;

        var url='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+$scope.id+'&callback=JSON_CALLBACK';

        $http({
            method:'Jsonp',
            url: url
        }).success(function (data) {
            $scope.hasLoading = false;

            console.log(data);
            $scope.item = data.result[0];


        }).error(function (error) {
            console.log(error);
        });


        $scope.share = function() {

            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    {text: '分享到新浪微博'},
                    {text: '分享到腾讯微博'}
                ],
                titleText: '分享文章',
                cancelText: '取消',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index) {
                    if(index == 0){
                        window.open("http://service.weibo.com/share/share.php?title=&url=http%3A%2F%2Fwww.jiathis.com%2F%23jtss-tsina&source=bookmark&appkey=2992571369&pic=http%3A%2F%2Fblog.jiathis.com%2Fwp-content%2Fuploads%2F2013%2F02%2Fjtweixin.jpg&ralateUid=1647863564","height=500,width=611,scrollbars=yes,status=yes");
                        /*window.location.assign("http://service.weibo.com/share/share.php?title=&url=http%3A%2F%2Fwww.jiathis.com%2F%23jtss-tsina&source=bookmark&appkey=2992571369&pic=http%3A%2F%2Fblog.jiathis.com%2Fwp-content%2Fuploads%2F2013%2F02%2Fjtweixin.jpg&ralateUid=1647863564")*/
                    }
                    if(index == 1){
                        window.location.assign("http://share.v.t.qq.com/index.php?c=share&a=index&title=来吧，少年&url=http://www.jiathis.com&appkey=ce15e084124446b9a612a5c29f82f080&site=www.jiathis.com&pic=http://blog.jiathis.com/wp-content/uploads/2013/02/jtweixin.jpg")
                    }

                    return true;
                }
            });
        };
        

    }])


    .controller('bbsCtrl',['$scope','$state','$http','BbsFactory',function ($scope,$state,$http,BbsFactory) {


        BbsFactory.s2();
        BbsFactory.s3();

        $scope.$on('BbsFactoryBeginning',function(event,data){
            console.log(data);
        });

        BbsFactory.s1();



        $scope.hasLoading = true;

        $scope.$on('BbsFactoryUpdate',function(event,data){
            $scope.items = data;
            $scope.hasLoading=false;
            $scope.$broadcast('scroll.refreshComplete');
            // console.log(data);
        });

        // 初始进去的数据
        BbsFactory.refresh();
        //下拉更新的数据

        $scope.refresh = function () {
            BbsFactory.refresh();
        };
        $scope.hasData=function(){
            return BbsFactory.hasData();
        }


    }])
    
    .controller('bbsDetailCtrl',['$scope','$state','$stateParams','$http',function ($scope,$state,$stateParams,$http) {

        $scope.id=$stateParams.id;
        $scope.hasLoading = true;

        var url='http://www.phonegap100.com/appapi.php?a=getThreadContent&tid='+$scope.id+'&callback=JSON_CALLBACK';


        $http({
            method:'Jsonp',
            url: url
        }).success(function (data) {
            console.log(data);
            $scope.item = data.result[0];
            $scope.hasLoading = false;

        }).error(function (error) {
            console.log(error);
        });


    }])


    .controller('myCtrl',['$scope','$state',function ($scope,$state) {


    }])





