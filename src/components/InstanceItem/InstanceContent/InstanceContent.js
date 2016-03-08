import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import CardText from 'material-ui/lib/card/card-text'
import { FormattedDate } from 'react-intl'

import s from './InstanceContent.scss'

const InstanceContent = ({ instance, editing }) => {

  let dateNode
  const updatedAt = instance.get('updated_at')
  const username = instance.get('requested_by')
  const userURL = `https://github.com/${username}`
  const userLinkNode = (
    <a href={userURL} target="_blank">{username}</a>
  )

  if (updatedAt) {
    dateNode = (
      <span>
        {'on '}
        <FormattedDate
          value={new Date(updatedAt) * 1000}
          day="numeric"
          month="long"
          year="numeric"
          hour="numeric"
          minute="numeric"
        />
      </span>
    )
  }

  return (
    !editing ? (
      <CardText>
        <p className={s.comment}>{instance.get('comment')}</p>
        {'Updated '}{dateNode}
        {' by '}{userLinkNode}{'.'}
      </CardText>
    ) : <div></div>
  )
}

InstanceContent.propTypes = {
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(InstanceContent, s)
