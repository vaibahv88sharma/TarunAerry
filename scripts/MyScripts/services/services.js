﻿angular.module('homeModule').factory("homeService", ["$http", "$q", "$resource", function ($http, $q, $resource) {

    function getAllUserResource(id) {
        if (id) {
            return $resource(
                //appWebUrlNew1 + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('UserDetails')/items(':id')?" + "@target='" + hostweburl + "'",
                "",
                { id: id },
                {
                    query: {
                        method: 'GET', //isArray: false, 
                        headers: { "Accept": "application/json; odata=verbose" },
                        params: {
                            //'$select': 'Id,Title,site,name,bio'
                            '$select': 'Id,Title,site,name,bio,email,nameDetailsId,nameDetails/Name,nameDetails/Title',
                            '$expand': 'nameDetails/Id'
                        },
                    }
                }
            );
        }
        else {
            return $resource(
                "./scripts/MyScripts/source.json",
                {},
                {
                    query: {
                        method: 'GET',
                        //params: {
                        //    '$select': 'Id,Title,site,name,bio,email,nameDetailsId,nameDetails/Name,nameDetails/Title',
                        //    '$expand': 'nameDetails/Id'
                        //},
                    }
                }
            );
        }
    }

    function getAllResource() {
        var resource = getAllUserResource();
        var deferred = $q.defer();

        resource.query({},
            function (data) {
                deferred.resolve(data);
            }, function (error) {
                deferred.reject(error);
            });
        return deferred.promise;
    }

    function getSelUserResource(id) {
        var resource = getAllUserResource(id);
        var deferred = $q.defer();

        resource.query({},
            function (data) {
                deferred.resolve(data);
            }, function (error) {
                deferred.reject(error);
            });
        return deferred.promise;
    }

    return {
        getAllResource: getAllResource,
        getSelUserResource: getSelUserResource
    };
}]);
