import PropTypes from 'prop-types';

export function MyButton({text, name='user'}) {
   
    return <button onClick ={function(){
        console.log('click');
    }}>
        {text} - {name}
    </button>
}

MyButton.propTypes = {
    text: PropTypes.string.isRequired
}

MyButton.defaultProps = {
    name: 'Hello'
}