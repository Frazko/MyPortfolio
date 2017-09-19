angular.module('personalPortfolio')
    .controller('CategoryController', ['$state', '$scope', 'projectsListService', '$stateParams', function($state, $scope, projectsListService, $stateParams) {
        projectsListService.getData().then(function(data) {
            $scope.data = data['Projects'];
            console.log('>> algo !! ');
            //console.log('>> frontend !! ' + JSON.stringify($scope.data));
            console.log('>> frontend !! ' + JSON.stringify($scope.data[0].mobile));
            fillData();
        });

        $scope.galleryType = "";
        $scope.dataItems = {};


        console.log('categoryId :: ' + $stateParams.categoryId);

        function fillData() {
            switch ($stateParams.categoryId) {
                case "mobile":
                    $scope.dataItems = $scope.data[0].mobile;
                    $scope.galleryType = "Mobile Dev Gallery";
                    break;
                case "frontend":
                    $scope.dataItems = $scope.data[0].frontend;
                    $scope.galleryType = "Front End Gallery";
                    break;
                case "olahtml":
                    $scope.dataItems = $scope.data[0].olahtml;
                    $scope.galleryType = "OLA HTML5 Gallery";
                    break;
                case "olaflash":
                    $scope.dataItems = $scope.data[0].olaflash;
                    $scope.galleryType = "OLA Flash Gallery";
                    break;
            }
        }




    }])
