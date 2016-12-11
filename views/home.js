const html = require('choo/html');
const header = require('../components/header');
const css = require('aphrodite').css;
const styles = require('../styles');
module.exports = (state, prev, act) => html`
    <main>
        ${header(state, act)}
        <label>Enter Your Room Name:
            <input 
                oninput=${ev => act('inputRoom', ev.target.value)}
                placeholder="My Room" >
        </label>
        <button class=${css(styles.button)}
            onclick=${() => {
                act('location:set', { 
                    href: '/' + state.room
                });
            }}>go</button>
        <footer></footer>
    </main>
`;