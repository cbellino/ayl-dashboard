import React, { Component } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import { MenuItem } from 'material-ui/Menu'

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
        <CardText className={s.root}>
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
          <TextField
            floatingLabelText={'Developer'}
            defaultValue={instance.get('requested_by')}
            onChange={this.handleDeveloperChange.bind(this)}
            fullWidth={true}
          />
          <TextField
            floatingLabelText={'Comment'}
            defaultValue={instance.get('comment')}
            onChange={this.handleCommentChange.bind(this)}
            multiLine={true}
            fullWidth={true}
          />
        </CardText>
      ) : null
    )
  }
}

InstanceForm.propTypes = {
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(s)(InstanceForm)
