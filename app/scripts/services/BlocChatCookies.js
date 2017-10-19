(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(currentUser);
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/usernameModal.html',
        controller: 'UsernameModalInstanceCtrl as usernameModalInstance'
      })
    }
  }

  angular
      .module('blocChat')
      .run(['$cookies', '$uibModal', BlocChatCookies]);
})();