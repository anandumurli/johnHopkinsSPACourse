(function(){
    angular.module('module1',[]).controller('healtyEating',function($scope){
        $scope.name = "";
        $scope.flag = 0;
        $scope.countFood = function(){
            var inputValues = $scope.name.split(',').filter(function(el){    
                return el.replace(/\s*/g,'')
            })
            
            if(inputValues.length >= 1 && inputValues.length <= 3){
                $scope.flag = 1
                console.log('good to go')
            }
            else if(inputValues.length == 0){
                $scope.flag = 3
            }
            else{
                $scope.flag = 2
                console.log('not good to go')
            }
        };
    });
})();