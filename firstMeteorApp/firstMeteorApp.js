var Resolutions = new Mongo.Collection("resolution");

if (Meteor.isClient) {

	Template.body.helpers({
		resolutions: function  () {
			return Resolutions.find();
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function() {});
}
