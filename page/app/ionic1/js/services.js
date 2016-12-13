
angular.module('starter.services',[])

//封装jsonp获取数据
    .factory('HttpJsonp',function($http) {

        return {
            getData: function (url) {
                return $http({
                    method: 'Jsonp',
                    url: url + '&callback=JSON_CALLBACK'
                }).success(function (data) {

                }).error(function (error) {

                })
            }

        }


    })
    .factory('HomeFactory',function ($http,$rootScope,HttpJsonp) {
        var page = 1;
        var results='';
        var hasData=true;
        return{
            loadMore:function () {
                var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page="+page;
                HttpJsonp.getData(url).success(function (data) {

                    //替换空图片
                    for(var i =0;i<data.result.length;i++){
                        if(data.result[i].pic == ''){
                            data.result[i].pic ='portal/201510/30/212849qdtzzhx2i6t2x5rk.png'
                        }
                    }

                    if(data.result.length == 0){
                        hasData=false;
                    }else{
                        hasData=true;
                        if(results == ''){
                            results = data.result;
                        }else{
                            results = results.concat(data.result);
                        }
                    }

                    $rootScope.$broadcast('HomeFactoryUpdate',results);   /*广播数据*/

                    page++;

                    console.log(page);

                })
            },
            hasData:function(){
                return hasData;
            }
        }


    })
    .factory('BbsFactory',function ($http,$rootScope,HttpJsonp) {
        var page = 1;
        var results=[];
        var hasData=true;
        return{
            s1:function () {
                $rootScope.$broadcast('BbsFactoryBeginning','11111111');
            },

            s2:function () {
                setTimeout(function () {
                    $rootScope.$broadcast('BbsFactoryBeginning','22222222');

                },1000)
            },
            
            s3:function () {
                $rootScope.$broadcast('BbsFactoryBeginning','333333333');
            },

            refresh:function () {

                var url = "http://www.phonegap100.com/appapi.php?a=getThreadList&fid=2&page="+page;
                HttpJsonp.getData(url).success(function (data) {

                    if(data.result.length == 0){
                        hasData=false;
                    }else{
                        hasData=true;

                        for(var i=0;i<data.result.length;i++){
                            results.unshift(data.result[i])
                        }

                    }

                    $rootScope.$broadcast('BbsFactoryUpdate',results);   /*广播数据*/
                    page++;

                });

            },



            hasData:function(){
                return hasData;
            }
        }


    })


