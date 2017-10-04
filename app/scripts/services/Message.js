(function() {
   
    function Message($firebaseArray) {

      var Message = {};
      var ref = firebase.database().ref().child("messages");
      var allMessages = $firebaseArray(ref);

   
      Message.getByRoomId = function(roomId) {
        var roomMessages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        return roomMessages;
      }

      return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();