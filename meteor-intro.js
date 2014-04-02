// Meteor Intro
// by dannydavidson

// Functional code controls changing state.
//
// At every moment in time,
// your application's state is represented by data.  In Meteor, you model
// shared state using a database called MongoDB.
//
// This is the syntax to create a Collection
var Items = new Meteor.Collection( 'items' );

// Your javascript in Meteor can run in the browser or
// on the server
if ( Meteor.isClient ) {

	// State is not always shared, sometimes it represents
	// something that is local to the user. In Meteor, you
	// model local state using the Session.
	//
	// Here's how you set a value on the Session.
	Session.set( 'currentItem', 1 );

	Template.hello.greeting = function () {
		return "Welcome to meteor-intro.";
	};

	Template.hello.events( {
		'click input': function () {
			// template data, if any, is available in 'this'
			if ( typeof console !== 'undefined' )
				console.log( "You pressed the button" );
		}
	} );
}

if ( Meteor.isServer ) {
	Meteor.startup( function () {
		// code to run on server at startup
	} );
}
