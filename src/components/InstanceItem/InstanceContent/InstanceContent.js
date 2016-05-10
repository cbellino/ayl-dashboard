import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { CardText } from 'material-ui/Card'

import s from './InstanceContent.scss'

const InstanceContent = ({ instance, editing }) => {
  return (
    !editing ? (
      <CardText className={s.root}>
        {instance.get('comment')}
      </CardText>
    ) : null
  )
}

InstanceContent.propTypes = {
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(s)(InstanceContent)
