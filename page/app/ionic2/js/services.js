angular.module('starter.services',[])
    
    .factory('mainFactory',['$http','$rootScope',function ($http,$rootScope) {
        var results='';

        return{

            "num":0,
            "have":[],
            getData:function () {
                $http({
                    method:'GET',
                    url:'libs/groups.json'
                }).success(function (data) {
                    console.log(data);
                    
                    results = data;
                    $rootScope.$broadcast('mainFactoryUpdate',results);   /*广播数据*/
                   
                    
                }).error(function (error) {
                    console.log(error);
                })
            }
        }

    }])