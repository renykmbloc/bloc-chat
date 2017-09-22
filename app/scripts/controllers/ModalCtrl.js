(function() {
    function ModalCtrl($uibModal) {
      this.open = function() {
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/modal.html',
          controller: 'ModalInstanceCtrl as modalInstance'
        })
      }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();