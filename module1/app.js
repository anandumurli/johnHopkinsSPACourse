(function(){
    angular.module('module1',[]).controller('healtyEating',function($scope){
        $scope.name = "blahhhh";
        $scope.funckx = function(){
            var inputValues = $scope.name.split(',')
            var emptyEle = inputValues.forEach(function(element){
                element.replace(/\s{0,}/,'blank area')
                
//                return element != 'blank area'
            })
//            var cntr = 0
//            inputValues.forEach(function(el){
//                console.log(el.replace(/\s{0,}/,'white splace'))
//            })
            console.log(inputValues)
            console.log(emptyEle)
        };
    });
})();