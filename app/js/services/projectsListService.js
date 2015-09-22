angular.module('personalPortfolio')
    .factory('projectsListService', ['$state', '$q', '$timeout', '$http', '$rootScope', function($state, $q, $timeout, $http, $rootScope) {
        console.log('Reading json file!!');
        var defer = false;

        function _loadData() {
            if (!defer) {
                defer = $q.defer();
                $http.get('projectsList.json').success(function(data) {
                    _data = data;
                    console.log(' -- LOADING FILE FOR DATA !!' + JSON.stringify(data));
                    defer.resolve(data);
                });
            }
            return defer.promise;
        }


        function _getDetailData(detailType, detailIndex) {
            if (!defer) {
                $state.go("category");
            } else {
                console.log(' ' + JSON.stringify(defer.promise));
                console.log('  -  ');
                console.log(' -- >>>>>>> !!' + JSON.stringify(defer.promise.value[detailType]));
            }
        }


        var service = {
            getData: _loadData,
            getDetail: _getDetailData
        };


        return service;



    }]);


/*
var defer = false;

function _loadData() {
    if(!defer) {
        defer = $q.defer();
        $http.get('user.json').success(function (data) {
            _data = data;
            console.log("user.json loaded");
            defer.resolve(data);
        });
    }
    return defer.promise;
}
 */





/*


        $rootScope.data=null;

        var service = {
            getData: getData
        };


        return service;

        function getData(refresh) {
            if (!$rootScope.data) {
                return $http.get('projectsList.json').then(function(data) {
                    console.log(' -- LOADING FILE FOR DATA !!' + JSON.stringify(data));
                    $rootScope.data = data;
                    return $rootScope.data;
                });
            } else {
                var deferrer = $q.defer();
                deferrer.resolve($rootScope.data);
                console.log('************* DEFERRED DATA!');
                return deferrer.promise;
            }

        }

*/
/*
angular.module('personalPortfolio')
    .factory('projectsListService', function($q, $timeout, $http) {


        var jsonFile = function(callback) {
            


            var deferred = $q.defer();

            $timeout(function() {
                $http.get('projectsList.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        };

        console.log('reading json file!! ' + jsonFile);

        return jsonFile;
    });



 */
