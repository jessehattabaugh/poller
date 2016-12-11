const firebase = require('firebase');
const auth = firebase.auth();
module.exports = {
	namespace: 'user',
	state: {
		loggingIn: false
	},
	reducers: {
		loggingIn: (data, state) => ({
			loggingIn: true
		}),
		loggedIn: (data, state) => ({
			loggingIn: false,
			uid: data.uid,
			name: data.name
		}),
		loggedOut: (data, state) => ({
			loggingIn: false,
			uid: null,
			name: null
		}),
	},
	effects: {
		login: (data, state, act, done) => {
			console.info('logging in');
			act('user:loggingIn', done);
			const provider = new firebase.auth.GoogleAuthProvider();
			auth.signInWithPopup(provider).catch(function(err) {
				act('user:loggedOut', done);
			  console.error(err);
			});
		}
	},
	subscriptions: [
		(act, done) => auth.onAuthStateChanged(user => {
			if (user) {
				console.info('logged in');
				act('user:loggedIn', {
					name: user.displayName,
					uid: user.uid
				}, done);
			} else {
				console.info('logged out');
				act('user:loggedOut', done);
			}
		})
	]
};