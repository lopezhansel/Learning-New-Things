 if (Meteor.isClient) {
  Template.body.helpers({
    resolution: [
    {title:"hello resolution #1"}]
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
