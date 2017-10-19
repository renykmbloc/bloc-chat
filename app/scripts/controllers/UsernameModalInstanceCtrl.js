(function() {
    function UsernameModalInstanceCtrl($uibModalInstance, $cookies) {
    
      this.setUsername = function() {
        if (this.username) {
          $uibModalInstance.close(this.username);
          $cookies.put('blocChatCurrentUser', this.username);
        }
      }
    }

    angular
        .module('blocChat')
        .controller('UsernameModalInstanceCtrl', ['$uibModalInstance', '$cookies', UsernameModalInstanceCtrl]);
})();