var adminLayoutExample = {
    controllerAs: "vm",
    controller: function () {
        var vm = this;

        vm.userName = "Test Username";

        vm.sideMenuItems = [{
            state: "home",
            linkText: "home",
            icon: "check",
            requiresLogin: false
        },{
            state: "firebase",
            linkText: "firebase",
            icon: "check",
            requiresLogin: false
        }, {
            state: "about",
            linkText: "about",
            icon: "users",
            requiresLogin: false
        }];

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
