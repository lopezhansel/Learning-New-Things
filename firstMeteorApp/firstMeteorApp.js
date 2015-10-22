var Resolutions = new Mongo.Collection("resolution");

if (Meteor.isClient) {

	Template.body.helpers({
		resolutions: function() {
			if (Session.get('hideFinished')) {
				return Resolutions.find({
					checked: {
						$ne: true
					}
				});
			} else {

				return Resolutions.find();
			}
		},
		hideFinished: function() {
			return Session.get('hideFinished');
		}
	});


	Template.body.events({
		'submit .new-resolution': function(event) {
			var title = event.target.title.value;
			Resolutions.insert({
				title: title,
				createdAt: new Date()
			});
			event.target.title.value = '';

			//  In order for the browser not to refresh
			return false;
		},
		"change .hide-finished": function(event) {
			Session.set('hideFinished', event.target.checked);
		}
	});


	Template.resolution.events({
		'click .toggle-checked': function() {
			Resolutions.update(this._id, {
				$set: {
					checked: !this.checked
				}
			});
		},
		'click .delete': function() {
			console.log(this);
			Resolutions.remove(this._id);
		}
	});



}

if (Meteor.isServer) {
	Meteor.startup(function() {});
}