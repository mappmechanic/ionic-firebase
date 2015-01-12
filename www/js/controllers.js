angular.module('mychat.controllers', [])

.controller('LoginCtrl', function ($scope, $ionicModal, $state) {
    console.log('Login Controller Initialized');

    $ionicModal.fromTemplateUrl('templates/signup.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.createUser = function (user) {

    }

    $scope.signIn = function () {
        $state.go('tab.rooms');
    }
})

.controller('ChatCtrl', function ($scope, Chats) {
    console.log("Chat Controller initialized");
    $scope.chats = Chats.all();
})


.controller('RoomsCtrl', function ($scope, Rooms) {
    console.log("Rooms Controller initialized");
    $scope.rooms = Rooms.all();
});