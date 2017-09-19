angular.module('personalPortfolio')
    .controller('DetailController', [
        '$state', 
        '$scope', 
        'projectsListService', 
        '$stateParams', 
        '$sce', 
    function($state, $scope, projectsListService, $stateParams, $sce) {

        $scope.type = $stateParams.typeId;
        $scope.detail = $stateParams.detailId;

        $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };

        //console.log('$state.$current.name :: ' + $state.$current.name);

        console.log('typeId :: ' + $stateParams.typeId);
        console.log('detailId :: ' + $stateParams.detailId);

        // Problema.. tiene que haber argado el file para buscar detail
        //projectsListService.getDetail($stateParams.typeId, $stateParams.detailId);
        //
        projectsListService.getData().then(function(data) {
            $scope.data = data['Projects'][0][$stateParams.typeId][$stateParams.detailId];
            //console.log('>> algo !! ');
            console.log('>> >>>>>>>>> !! ' + JSON.stringify($scope.data));
            //console.log('>> frontend !! ' + JSON.stringify($scope.data[0].frontend));
           
        });

    }]);

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map

//# sourceMappingURL=../../maps/controllers/detailController.js.map
