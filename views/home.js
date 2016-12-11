const html = require('choo/html');
const header = require('../components/header');
module.exports = (state, prev, act) => html`
    <main>
        ${header(state, act)}
        <form>
            <label>Enter Your Room Name:
                <input 
                    oninput=${(ev) => act('inputRoomName', ev.target.value)}
                    placeholder="My Room" >
            </label>
            <button onclick=${() => act('location:setLocation', { 
                location: state.roomName
            })}>go</button>
        </form>
        <footer></footer>
    </main>
`;