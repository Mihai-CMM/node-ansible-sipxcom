//TODO -use bootstrap material design
//https://www.npmjs.com/package/bootstrap-material-design



var myApp=angular.module("app", ['ui.router', 'ngAvatar']);

//Used to prompt confirmation from user if he wants to continue pushing buttons
myApp.directive('confirm', [function () {
        return {
            priority: 100,
            restrict: 'A',
            link: {
                pre: function (scope, element, attrs) {
                    var msg = attrs.confirm || "Are you sure?";
                    element.bind('click', function (event) {
                        if (!confirm(msg)) {
                            event.stopImmediatePropagation();
                            event.preventDefault;
                        }
                    });
                }
            }
        };
    }]);

// Used to reneder UI-view content on index.html
myApp.config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/dashboard');

      $stateProvider

          // HOME STATES AND NESTED VIEWS ========================================
          .state('dashboard', {
              url:'/dashboard',
              templateUrl:'dashboard.html',
          })

          // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
          .state('settings', {
              url:'/settings',
              templateUrl:'settings.html',
          })


          .state('profile', {
              url:'/profile',
              templateUrl:'profile.html',
          })

          .state('help', {
              url:'/help',
              templateUrl:'help.html',
          })

          .state('machines', {
              url:'/machines',
              templateUrl:'machines.html',
          })

          .state('analytics', {
              url:'/analytics',
              templateUrl:'analytics.html',
          })

          .state('reports', {
              url:'/reports',
              templateUrl:'reports.html',
          })
  });



/// For button actions
myApp.controller('GetController',function($scope,$http,sharedProperties) {

    $scope.listMachines = function() {
     //TODO -agaug Y/N pentru solicitare si continuare actiune
     // Angular confirm action
     console.log('Get machines');
     $http.get('/aws');
     //TODO -
    };

    $scope.addMachine = function() {
       console.log('Create machine');
       console.log('VALORI CITITE DIN CEALALATA PAGINA',sharedProperties.getProperty().awsId)
       $http.post('/aws');
    };
    $scope.deleteMachine = function() {
       //TODO -agaug Y/N pentru solicitare si continuare actiune
       // Angular confirm action
       console.log('Delete machine');
       $http.delete('/aws');
       //TODO -
    };

    $scope.stopMachine = function() {
       //TODO -agaug Y/N pentru solicitare si continuare actiune
       // Angular confirm action
       console.log('Stop machine');
       $http.put('/aws');
       //TODO -
    };

  });

// for profile.html page
myApp.controller('ProfileController',function($scope,sharedProperties) {
      $scope.master = {};
      $scope.update = function(user) {
        $scope.master = angular.copy(user);
        sharedProperties.setProperty($scope.master);
      };

      $scope.reset = function() {
        $scope.master = {};
        $scope.user = null;
      };
      $scope.reset();
    });



myApp.service('sharedProperties', function () {
        var property = {};

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
});
