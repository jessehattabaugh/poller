const css = require('aphrodite').StyleSheet;

module.exports = css.create({
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'sans-serif'
    },
    button: {
        background: 'lightblue',
        border: '.1em outset grey',
        padding: '1em',
        ':hover': {
            textDecoration: 'underline'
        },
        ':active': {
            borderStyle: 'inset'
        }
    }
});