const html = require('choo/html');
module.exports = (state, prev, send) => html`
    <main>
        <h2>${state.params.roomName}</h2>
    </main>
`;