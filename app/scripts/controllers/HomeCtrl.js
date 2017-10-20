(function() {
    function HomeCtrl(Room, Message, TimeFilter, $cookies) {  
        
        var currentUser = $cookies.get('blocChatCurrentUser');
        
        this.rooms = Room.all;
        
        this.openRoom = function(room) {
            this.currentRoom = room;
            this.currentRoomName = this.currentRoom.$value;
            this.roomMessages = Message.getByRoomId(this.currentRoom.$id);
        };
        
        this.send = function() {
            Message.addMessage({
            roomId: this.currentRoom.$id,
            content: this.newMessage,
            sentAt: TimeFilter(),
            username: currentUser
          });
          this.newMessage = "";
        };
        
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', 'TimeFilter', '$cookies', HomeCtrl]);
})();