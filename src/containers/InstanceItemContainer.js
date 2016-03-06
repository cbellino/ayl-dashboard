import { connect } from 'react-redux'
import { updateInstance } from '../actions/instances'
import InstanceItem from '../components/InstanceItem/InstanceItem'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (instance) => {
      dispatch(updateInstance(instance))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstanceItem)
