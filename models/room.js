const firebase = require('firebase');

const rooms = firebase.database().ref().child('rooms');

module.exports = {
    namespace: 'room',    
    reducers: {},
    effects: {},
    subscriptions: []
};