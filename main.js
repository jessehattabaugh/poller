const firebase = require('firebase');
firebase.initializeApp({
	apiKey: "AIzaSyDYsfmZEjSi1LFoHLu-it8n8s5XBCG8t8g",
  authDomain: "poller-35839.firebaseapp.com",
  databaseURL: "https://poller-35839.firebaseio.com",
  storageBucket: "poller-35839.appspot.com",
  messagingSenderId: "332335504650"
});


const choo = require('choo');
const app = choo();

app.model({
	state: {
		room: ''
	},
	reducers: {
		'inputRoom': (data, state) => ({
			room: data
		})
	}
});

app.model(require('./models/user'));

app.router('/:room', (route) => [
	route('/', require('./views/home')),
	route(':room', require('./views/room'))
]);

const tree = app.start();
document.body.appendChild(tree);
console.info('poller started');


