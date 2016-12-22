var templateService =  function ($http) {
    var getTemplates = function () {
        return $http.get('src/client/app/Components/templates.json');
    };

    return {
        getTemplates: getTemplates
    };
};

angular.module("my-angular-components").factory("templateService", templateService);