angular.module("personalPortfolio")
    .factory("projectsListService", [
        "$state",
        "$q",
        "$timeout",
        "$http",
        "$rootScope",
    function($state, $q, $timeout, $http, $rootScope) {
        console.log("Reading json file!!");

        var defer = false;
        function _loadData() {
        console.log("load data!!");
        if (!defer) {
            defer = $q.defer();
            $http.get("projectsList.json").success(function(data) {
            _data = data;
            console.log(" -- LOADING FILE FOR DATA !!" + JSON.stringify(data));
            defer.resolve(data);
            });
        }
        return defer.promise;
        }

        function _getDetailData(detailType, detailIndex) {
        console.log(" _getDetailData -  ");
        if (!defer) {
            $state.go("category");
        } else {
            console.log(" " + JSON.stringify(defer.promise));
            console.log("  -  ");
            console.log(
            " -- >>>>>>> !!" + JSON.stringify(defer.promise.value[detailType])
            );
        }
        }

        var service = {
        getData: _loadData,
        getDetail: _getDetailData
        };

        return service;
  }
]);

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map

//# sourceMappingURL=../../maps/services/projectsListService.js.map
