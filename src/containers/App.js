import { connect } from 'react-redux'
import TheComponent from '../components/App';
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
     buttonText: state.text
    }
}

// 2. The container dispatches an action with a type 
// of defined (mandatory)

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
          dispatch({type: 'BASIC_ACTION', text: 'new text'})
        }
    }
}
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)
export default App;