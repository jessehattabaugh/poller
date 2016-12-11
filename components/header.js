const html = require('choo/html');
const styles = require('../styles');
const className = require('aphrodite').css;
module.exports = (state, act) => html`
<header class=${className(styles.flex)}>
    <h1>Poller</h1>
    <nav>
        <a onclick=${state.user.uid ? () => {} : ev => act('user:login')}>
            ${state.user.uid ? state.user.name : 'Login'}
        </a>
    </nav>
</header>`;
    