const html = require('choo/html');
module.exports = (state, prev, send) => html`
    <main>
        <label>Enter Your Room Name:
            <input 
                oninput=${(ev) => send('inputRoomName', ev.target.value)}
                placeholder="My Room" >
        </label>
        <button onclick=${() => send('location:setLocation', { 
            location: state.roomName
        })}>go</button>
    </main>
`;