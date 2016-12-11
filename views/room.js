const html = require('choo/html');
const header = require('../components/header');
module.exports = (state, prev, act) => html`
    <main>
         ${header(state, act)}
        <h2>${state.params.roomName}</h2>
    </main>
`;