(function() {
    function HomeCtrl(Room, Message) {   
        this.rooms = Room.all;
        
        this.openRoom = function(room) {
            var currentRoom = room;
        
            this.currentRoomName = currentRoom.$value
            this.roomMessages = Message.getByRoomId(currentRoom.$id);
        }        
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();