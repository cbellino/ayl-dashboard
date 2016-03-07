import React, { Component } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import classnames from 'classnames'
import ga from 'react-ga'

import s from './InstanceItem.scss'
import InstanceContent from './InstanceContent/InstanceContent'
import InstanceForm from './InstanceForm/InstanceForm'
import InstanceActions from './InstanceActions/InstanceActions'

const statusColors = {
  locked: '#f8483e',
  used: '#eca839',
  free: '#70c752'
}
const subtitleStyle = {
  fontWeight: '500',
  WebkitFontSmoothing: 'antialiased'
}

class InstanceItem extends Component {

  constructor() {
    super()
    this.state = { editing: false }
  }

  startEditing() {
    ga.event( { category: 'Instance', action: 'Start editing' } )
    this.setState({ editing: true })
  }

  stopEditing() {
    ga.event( { category: 'Instance', action: 'Stop editing' } )
    this.setState({ editing: false })
  }

  handleChange(instance) {
    this.setState({ instance: instance })
  }

  handleSave(instance) {
    ga.event( { category: 'Instance', action: 'Save' } )
    this.setState({ editing: false })
    this.props.onSave(instance)
  }

  render() {
    const { editing } = this.state
    const { instance } = this.props

    const status = instance.get('status') || 'free'
    const statusHuman = status === 'locked' ?
      'locked' :
      (status === 'used' ? 'in use' : 'free')

    const color = statusColors[status]
    const rootStyle = {
      borderColor: color
    }
    const cardClasses = classnames({
      [s.root]: true,
      [s.expanded]: editing
    })

    return (
      <Card className={cardClasses} style={rootStyle}>
        {/* TODO: Transform this into an icon in the top-right corner */}
        {/*<FlatButton
          label={'Open'}
          linkButton={true}
          href={instanceUrl}
          style={actionStyle}
          className={s.action}
          target="_blank"
        />*/}
        <CardTitle
          title={`${instance.get('name')} - ${statusHuman}`}
          titleColor={color}
          subtitleStyle={subtitleStyle}
        />
        <InstanceContent
          instance={instance}
          editing={editing}
        />
        <InstanceForm
          instance={instance}
          editing={editing}
          onChange={this.handleChange.bind(this)}
        />
        <InstanceActions
          editing={editing}
          onStartEditing={this.startEditing.bind(this)}
          onStopEditing={this.stopEditing.bind(this)}
          onSave={this.handleSave.bind(this, this.state.instance)}
        />
      </Card>
    )
  }

}

InstanceItem.propTypes = {
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(InstanceItem, s)
