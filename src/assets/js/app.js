var RD = angular.module('RDapp',['ngRoute','ngMdIcons']);
/*\
========================================================================
c:config
========================================================================
\*/
RD.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "assets/views/main.html",
            controller: "main"
        })
        .when("/channels", {
            templateUrl: "views/channels.html",
            controller: "channels"
        })
        .otherwise({
            redirectTo: '/'
        });
});
/*\
========================================================================
c:run
========================================================================
\*/
RD.run(function($rootScope) {
	$rootScope.apiUrl = '//uiui.local';
    $rootScope.inc = function(val) {
        return './assets/views/inc/'+val+'.html';
    };
    $rootScope.pge = function(val) {
        return './assets/views/'+val+'.html';
    };
});
/*\
========================================================================
c:RDapp
========================================================================
\*/
RD.controller('RDapp',function($rootScope,$scope,$location,$timeout,$filter) {
    $rootScope.sidOpn = true;
    $rootScope.sidNav = function() {
        $rootScope.sidOpn = $rootScope.sidOpn ? false:true;
    };
});
/*\
========================================================================
c:main
========================================================================
\*/
RD.controller('main',function($rootScope,$scope) {
    $rootScope.page = $rootScope.pge('users');
    $rootScope.goPage = function(page) {
        $rootScope.page = $rootScope.pge(page);
    };
    $rootScope.sidItems = [
        {name:'Controller',icon:'flash_on',page:'controller'},
        {name:'Users',icon:'group',page:'users'},
        {name:'Add account',icon:'person_add',page:''},
        {name:'Proxy',icon:'swap_vertial_circle',page:''},
        {name:'Appointment',icon:'picture_as_pdf',page:''},
        {name:'Statistics',icon:'insert_chart',page:''}
    ];
});

/*\
========================================================================
c:sidnav
========================================================================
\*/
RD.controller('sidnav',function() {});
/*\
========================================================================
c:controller
========================================================================
\*/
RD.controller('controller',function($rootScope) {
    $rootScope.actChrome = 0;
    $rootScope.actUsers = 0;
    $rootScope.actProxy = 0;
});
/*\
========================================================================
c:controller
========================================================================
\*/
RD.controller('users',function($rootScope) {
    
});
/*\
========================================================================
c:ngSvg
========================================================================
\*/
RD.service('$api',function($rootScope,$http,$httpParamSerializer) {
    function login(auth,cl) {
        $http.post(
            $rootScope.apiUrl+'/api/auth',
            $httpParamSerializer({data:'auth'}),
            {
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'auth':'1234'
                }
            }
        ).then(function(data) {
            cl(data);
        });
    }

    return {
        login:login
    };
});