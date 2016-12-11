const fb = require('firebase');
const choo = require('choo');

const app = choo();

app.model({
    state: {
        roomName: ''
    },
    reducers: {
        'inputRoomName': (data, state) => ({
            roomName: data
        })
    }
});

app.router('/:roomName', (route) => [
   route('/', require('./views/home')),
   route('/:roomName', require('./views/room'))
]);

const tree = app.start();
document.body.appendChild(tree);
console.info('poller started');
