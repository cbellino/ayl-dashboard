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
import InstanceUpdateInfo from './InstanceUpdateInfo/InstanceUpdateInfo'

const statusColors = {
  locked: '#f8483e',
  used: '#eca839',
  free: '#70c752'
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
        <CardTitle
          title={<a title={'Open the instance'} href={instance.get('url')} target="_blank">{instance.get('name')}</a>}
          subtitle={<InstanceUpdateInfo instance={instance} />}
          titleColor={color}
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
          instance={instance}
          onStartEditing={this.startEditing.bind(this)}
          onStopEditing={this.stopEditing.bind(this)}
          onSave={this.handleSave.bind(this, instance)}
        />
      </Card>
    )
  }

}

InstanceItem.propTypes = {
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(InstanceItem, s)
