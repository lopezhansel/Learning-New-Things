 if (Meteor.isClient) {

  Template.body.helpers({
    resolutions: [
	    {title:"hello resolution #1"},
	    {title:"bye resolution #2"},
	    {title:"Angular is also Awesome"}
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}
// you can npm init to intall your node modules not in your 
// npm install -production
// npm install gulp --save-dev
// angular wont uglify properly if you dont have dependancy injections
// cd into firstMeteorApp 
// meteor
