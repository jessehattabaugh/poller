const html = require('choo/html');
module.exports = (state, act) => html`
<header>
    <h1>Poller</h1>
    <nav>
        <a onclick=${state.user.uid ? () => {} : ev => act('user:login')}>
            ${state.user.uid ? state.user.name : 'Login'}
        </a>
    </nav>
</header>`;
    