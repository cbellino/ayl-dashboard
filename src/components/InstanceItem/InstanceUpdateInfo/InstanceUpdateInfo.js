import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { FormattedDate } from 'react-intl'

import s from './InstanceUpdateInfo.scss'

const InstanceUpdateInfo = ({ instance }) => {

  const updatedAt = instance.get('updated_at')
  const username = instance.get('requested_by')
  const userURL = `https://github.com/${username}`

  const dateNode = updatedAt ? (
    <span>
      {'Updated on '}
      <span className={s.date}>
        <FormattedDate
          value={new Date(updatedAt)}
          day="numeric"
          month="numeric"
          year="numeric"
          hour="numeric"
          minute="numeric"
        />
      </span>
      {' '}
    </span>
  ) : null

  const userNode = username ? (
    <span>
      {'by '}
      <a href={userURL} target="_blank">{username}</a>
    </span>
  ) : null

  return (
    <span title="">
      {dateNode}
      {userNode}
    </span>
  )
}

InstanceUpdateInfo.propTypes = {
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(InstanceUpdateInfo, s)
