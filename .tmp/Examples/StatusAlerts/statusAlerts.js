var statusAlerts = {
    controllerAs: 'vm',
    controller: function(){
        var vm = this;

 
    },
    template:'<div class="example"><h1>Status Alerts</h1><hr><my-status-alert show="true" is-error="true" error-message="Something Went Wrong!!"></my-status-alert><my-status-alert show="true" is-success="true" success-message="Everyginng is Great!!"></my-status-alert></div>'
};

angular.module('examples').component('statusAlertExamples', statusAlerts);
