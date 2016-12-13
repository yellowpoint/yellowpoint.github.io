angular.module('starter.controllers', ['starter.services'])

    .controller('mainCtrl',['$scope','mainFactory','$rootScope',function ($scope,mainFactory,$rootScope) {

        //从已点菜单返回时再接收一次点菜的总数
        $rootScope.$on('$stateChangeSuccess',function(){
            console.log("wowowo22");
            $scope.num = mainFactory.num;
        });

        //接收数据
        $scope.$on('mainFactoryUpdate',function(event,data){
            $scope.items = data[0];
            $scope.list = data[0].items;
            for(var i=0;i<$scope.list.length;i++){
                $scope.list[i].num=1;
            }

        });
        mainFactory.getData();

        //接收服务里面点菜的总数
        $scope.$watch('$viewContentLoaded',function(event){
            $scope.num = mainFactory.num;
        });
        $scope.$on('$viewContentLoading',function(){
            $scope.num = mainFactory.num;
        });

        //点击加菜的按钮
        $scope.add = function ($index) {
            var nohave = true;
            mainFactory.num++;
            $scope.num = mainFactory.num;

            if(mainFactory.have.length == 0){
                mainFactory.have.push($scope.list[$index]);

            }else{
                console.log(mainFactory.have.length);
                for(var i= 0;i< mainFactory.have.length;i++){

                    if(mainFactory.have[i].id == $scope.list[$index].id ){
                        mainFactory.have[i].num++;
                        nohave =false
                    }
                }
                if(nohave){
                    mainFactory.have.push($scope.list[$index]);
                }
            }

            console.log(mainFactory.have);
        };



    }])


    .controller('hotCtrl',['$scope','mainFactory',function ($scope,mainFactory) {



        $scope.$on('mainFactoryUpdate',function(event,data){   //接收数据
            $scope.items = data[1];
            $scope.list = data[1].items;
            for(var i=0;i<$scope.list.length;i++){
                $scope.list[i].num=1;
            }
        });
        mainFactory.getData();

        $scope.$watch('$viewContentLoaded',function(event){
            console.log('aaa111');
            $scope.num = mainFactory.num;
        });
        $scope.$on('$viewContentLoading',function(){
            console.log('aaa222');
            $scope.num = mainFactory.num;
        });
        $scope.add = function ($index) {
            var nohave = true;
            mainFactory.num++;
            $scope.num = mainFactory.num;

            if(mainFactory.have.length == 0){
                mainFactory.have.push($scope.list[$index]);

            }else{
                console.log(mainFactory.have.length);
                for(var i= 0;i< mainFactory.have.length;i++){

                    if(mainFactory.have[i].id == $scope.list[$index].id ){
                        mainFactory.have[i].num++;
                        nohave =false
                    }
                }
                if(nohave){
                    mainFactory.have.push($scope.list[$index]);
                }
            }

            console.log(mainFactory.have);
        };


    }])

    .controller('coldCtrl',['$scope','mainFactory',function ($scope,mainFactory) {

        $scope.$on('mainFactoryUpdate',function(event,data){   //接收数据
            $scope.items = data[2];
            $scope.list = data[2].items;
            for(var i=0;i<$scope.list.length;i++){
                $scope.list[i].num=1;
            }

        });
        mainFactory.getData();

        $scope.$watch('$viewContentLoaded',function(event){
            console.log('aaa111');
            $scope.num = mainFactory.num;
        });
        $scope.$on('$viewContentLoading',function(){
            console.log('aaa222');
            $scope.num = mainFactory.num;
        });
        $scope.add = function ($index) {
            var nohave = true;
            mainFactory.num++;
            $scope.num = mainFactory.num;

            if(mainFactory.have.length == 0){
                mainFactory.have.push($scope.list[$index]);

            }else{
                console.log(mainFactory.have.length);
                for(var i= 0;i< mainFactory.have.length;i++){

                    if(mainFactory.have[i].id == $scope.list[$index].id ){
                        mainFactory.have[i].num++;
                        nohave =false
                    }
                }
                if(nohave){
                    mainFactory.have.push($scope.list[$index]);
                }
            }

            console.log(mainFactory.have);
        };

    }])

    .controller('soupCtrl',['$scope','mainFactory',function ($scope,mainFactory) {

        $scope.$on('mainFactoryUpdate',function(event,data){   //接收数据
            $scope.items = data[3];
            $scope.list = data[3].items;
            for(var i=0;i<$scope.list.length;i++){
                $scope.list[i].num=1;
            }
        });
        mainFactory.getData();

        $scope.$watch('$viewContentLoaded',function(event){
            console.log('aaa111');
            $scope.num = mainFactory.num;
        });
        $scope.$on('$viewContentLoading',function(){
            console.log('aaa222');
            $scope.num = mainFactory.num;
        });
        $scope.add = function ($index) {
            var nohave = true;
            mainFactory.num++;
            $scope.num = mainFactory.num;

            if(mainFactory.have.length == 0){
                mainFactory.have.push($scope.list[$index]);

            }else{
                console.log(mainFactory.have.length);
                for(var i= 0;i< mainFactory.have.length;i++){

                    if(mainFactory.have[i].id == $scope.list[$index].id ){
                        mainFactory.have[i].num++;
                        nohave =false
                    }
                }
                if(nohave){
                    mainFactory.have.push($scope.list[$index]);
                }
            }

            console.log(mainFactory.have);
        };

    }])

    .controller('dessertCtrl',['$scope','mainFactory','$rootScope',function ($scope,mainFactory,$rootScope) {



        $scope.$on('mainFactoryUpdate',function(event,data){   //接收数据
            $scope.items = data[4];
            $scope.list = data[4].items;
            for(var i=0;i<$scope.list.length;i++){
                $scope.list[i].num=1;
            }
        });
        mainFactory.getData();

        $scope.$watch('$viewContentLoaded',function(event){
            console.log('aaa111');
            $scope.num = mainFactory.num;
        });
        $scope.$on('$viewContentLoading',function(){
            console.log('aaa222');
            $scope.num = mainFactory.num;
        });

        $scope.add = function ($index) {
            var nohave = true;
            mainFactory.num++;
            $scope.num = mainFactory.num;

            if(mainFactory.have.length == 0){
                mainFactory.have.push($scope.list[$index]);

            }else{
                console.log(mainFactory.have.length);
                for(var i= 0;i< mainFactory.have.length;i++){

                    if(mainFactory.have[i].id == $scope.list[$index].id ){
                        mainFactory.have[i].num++;
                        nohave =false
                    }
                }
                if(nohave){
                    mainFactory.have.push($scope.list[$index]);
                }
            }

            console.log(mainFactory.have);
        };


    }])
    .controller('notarizeCtrl',['$scope','mainFactory','$rootScope',function ($scope,mainFactory,$rootScope) {

        $scope.num = mainFactory.num;
        $rootScope.$on('$stateChangeSuccess',function(){
            console.log("wowowo");
            $scope.num = mainFactory.num;
        });

        $scope.list = mainFactory.have;
        $scope.jia = function ($index) {
            for(var i =0;i<$scope.list.length;i++){
                if($index == i){
                    $scope.list[i].num++;
                    mainFactory.num ++;
                    $scope.num = mainFactory.num;
                    //将菜单列表传到服务里
                    mainFactory.have=$scope.list;
                    // console.log(mainFactory.have[0].num)

                }
            }

        };
        $scope.jian = function ($index) {

            for(var i =0;i<$scope.list.length;i++){
                if($index == i){
                    if($scope.list[i].num<=0){
                        $scope.list[i].num=0;
                    }else{
                        $scope.list[i].num--;
                        mainFactory.num --;
                        $scope.num = mainFactory.num;
                        //将菜单列表传到服务里
                        mainFactory.have=$scope.list;
                        // console.log(mainFactory.have[0].num)


                    }

                }
            }
        };


        //弹窗

        $scope.showTc = false;
        $scope.showConfirm = function () {
            $scope.showTc = true;
        };
        $scope.quxiao = function () {
            $scope.showTc = false;
        };
        $scope.queren = function () {
            $scope.showTc = false;
            console.log(mainFactory.have);
        }


    }])

    //继续点菜
    .controller('continueCtrl',['$scope',function ($scope) {

        
    }])



