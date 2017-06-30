//todo: allow customize height
var mySpinner = {
    bindings: {
        ngModel: '='
    },
    template:'<div class="row text-center"><img style="height: 100px" ng-src="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif"></div>'
};

angular.module('my-angular-components').component('mySpinner', mySpinner);



