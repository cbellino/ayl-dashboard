import { connect } from 'react-redux'
import InstanceList from '../components/InstanceList/InstanceList'

function mapStateToProps(state) {
  return {
    instances: state.get('instances')
  }
}

export default connect(mapStateToProps)(InstanceList)
