angular
  .module('Whatsapp')
  .controller('ChatsCtrl', ChatsCtrl);
 
function ChatsCtrl ($scope) {

	$scope.chats = $scope.$meteorCollection(Chats, false);
	$scope.remove = function  (chat) {
	  $scope.chats.remove(chat);
	};
 
}