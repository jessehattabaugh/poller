const html = require('choo/html');
const styles = require('../styles');
const css = require('aphrodite').css;
module.exports = (state, act) => html`
<header class=${css(styles.flex)}>
    <h1 class=${styles.title}>Poller</h1>
    <nav>
        <a onclick=${state.user.uid ? ev => act('user:logout') : ev => act('user:login')}>
            ${state.user.uid ? state.user.name : 'Login'}
        </a>
    </nav>
</header>`;
    