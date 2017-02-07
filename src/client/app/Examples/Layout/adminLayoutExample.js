var adminLayoutExample = {
    controllerAs: "vm",
    controller: function () {
        var vm = this;

        vm.userName = "Test Username";

        vm.sideMenuItems = [{
                state: "home",
                linkText: "Home",
                icon: "check",
                requiresLogin: false
            }, {
                state: "firebase",
                linkText: "Firebase",
                icon: "check",
                requiresLogin: false
            },
            {
                state: "exampleButtons",
                linkText: "Buttons",
                icon: "check",
                requiresLogin: false
            }, {
                state: "panelexamples",
                linkText: "Panels",
                icon: "users",
                requiresLogin: false
            }, {
                state: "inputs",
                linkText: "Inputs",
                icon: "users",
                requiresLogin: false
            }, {
                state: "forms",
                linkText: "Example Form",
                icon: "users",
                requiresLogin: false
            }, {
                state: "modalsstate",
                linkText: "Modals",
                icon: "users",
                requiresLogin: false
            },
            {
                state: "tags",
                linkText: "Tags",
                icon: "users",
                requiresLogin: false
            },
            {
                state: "status",
                linkText: "Status Alerts",
                icon: "users",
                requiresLogin: false
            },
            {
                state: "texteditor",
                linkText: "Text Editor",
                icon: "users",
                requiresLogin: false
            },
            {
                state: "selectlist",
                linkText: "Select List",
                icon: "check",
                requiresLogin: false
            },
            {
                state: "grid",
                linkText: "Grid List",
                icon: "check",
                requiresLogin: false
            },
            {
                state: "dates",
                linkText: "Dates",
                icon: "check",
                requiresLogin: false
            },
        ];

        vm.userMenuItems = [{
            state: "userprofile",
            linkText: "User Profile",
            icon: "user"
        }, {
            state: "useroptions",
            linkText: "User Options",
            icon: "cogs"
        }, {
            state: "logout",
            linkText: "Logout",
            icon: "cogs"
        }, {
            state: "login",
            linkText: "Login",
            icon: "check"
        }];

        vm.alertMenuItems = [{
            state: "alert1",
            linkText: "Alert 1",
            icon: "bell"
        }, {
            state: "alert2",
            linkText: "Alert 3",
            icon: "bell"
        }];

        vm.footerLinks = [{
                state: 'link1',
                linkText: "Link 1"
            }, {
                state: 'link2',
                linkText: "Link 2"
            }, {
                state: 'link3',
                linkText: "Link 3"
            },

        ]
    },
    templateUrl: "src/client/app/Examples/Layout/adminLayoutExampleTemplate.html"
};

angular.module("examples").component("adminLayoutExample", adminLayoutExample)
