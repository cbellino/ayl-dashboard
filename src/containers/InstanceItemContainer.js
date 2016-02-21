import { connect } from 'react-redux'
import { setInstance } from '../actions/instances'
import InstanceItem from '../components/InstanceItem/InstanceItem'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (instance) => {
      dispatch(setInstance(instance.get('id'), instance))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstanceItem)
