import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import CardText from 'material-ui/lib/card/card-text'
import { FormattedDate } from 'react-intl'

import s from './InstanceContent.scss'

const InstanceContent = ({ instance, editing }) => {

  const username = instance.get('requested_by')
  const date = new Date(instance.get('updated_at') * 1000)
  // const instanceUrl = `https://${instance.get('id')}.ayl.io`
  const userURL = `https://github.com/${username}`

  return (
    !editing ? (
      <CardText>
        {'Updated on '}
        <FormattedDate
          value={date}
          day="numeric"
          month="long"
          year="numeric"
          hour="numeric"
          minute="numeric"
        />
        {' by '}
        <a href={userURL} target="_blank">{username}</a>
        {'.'}
      </CardText>
    ) : <div></div>
  )
}

InstanceContent.propTypes = {
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(InstanceContent, s)
