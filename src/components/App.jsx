import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
const App = props => <div>
 <Button label={props.buttonText} onClick={props.onClick}></Button>
</div>


App.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

// When button is clicked the component calls a function in
// the container (anonymous function here)

App.defaultProps = {
    buttonText: 'defaultText',
    onClick: () => console.log('default click action')
}

export default App;