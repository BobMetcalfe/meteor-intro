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

	// You get state rendered to your UI by
	// defining rendering functions. This takes
	// time to adjust to, but no matter how complex
	// your data model gets, you'll always be returning
	// just Arrays and Objects.
	Template.items.items = function () {
		return [ {}, {}, {} ];
	};

	// To change state from user action, just react to change in an
	// event map function by updating state in either the Session or
	// Collection.
	Template.items.events( {
		'click .item': function ( evt ) {
			Session.set( 'currentItem', $( evt.currentTarget ).data( 'id' ) );
		}
	} );
}

if ( Meteor.isServer ) {
	Meteor.startup( function () {
		// code to run on server at startup
	} );
}
