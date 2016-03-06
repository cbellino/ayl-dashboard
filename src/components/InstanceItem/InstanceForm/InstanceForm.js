import React, { Component } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import CardText from 'material-ui/lib/card/card-text'
import TextField from 'material-ui/lib/text-field'
import SelectField from 'material-ui/lib/select-field'
import MenuItem from 'material-ui/lib/menus/menu-item'

import s from './InstanceForm.scss'

class InstanceForm extends Component {

  constructor({ instance }) {
    super()

    this.state = { instance: instance }
  }

  updateInstance(instance) {
    this.setState({ instance: instance })
    this.props.onChange(instance)
  }

  handleCommentChange(event) {
    this.updateInstance(this.state.instance.set('comment', event.target.value))
  }

  handleDeveloperChange(event) {
    this.updateInstance(this.state.instance.set('requested_by', event.target.value))
  }

  handleStatusChange(event, index, value) {
    this.updateInstance(this.state.instance.set('status', value))
  }

  render() {
    const { instance } = this.state

    return (
      this.props.editing ? (
        <CardText>
          <TextField
            floatingLabelText={'Comment'}
            defaultValue={instance.get('comment')}
            onChange={this.handleCommentChange.bind(this)}
            multiLine={true}
            fullWidth={true}
          />
          <TextField
            floatingLabelText={'Developer'}
            defaultValue={instance.get('requested_by')}
            onChange={this.handleDeveloperChange.bind(this)}
            fullWidth={true}
          />
          <SelectField
            floatingLabelText={'Status'}
            value={instance.get('status')}
            onChange={this.handleStatusChange.bind(this)}
            fullWidth={true}
          >
            <MenuItem value={'free'} primaryText="Free" />
            <MenuItem value={'used'} primaryText="In use" />
            <MenuItem value={'locked'} primaryText="Locked" />
          </SelectField>
        </CardText>
      ) : <div></div>
    )
  }
}

InstanceForm.propTypes = {
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(InstanceForm, s)
