import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/app-action'
import App from '../components/App'

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
