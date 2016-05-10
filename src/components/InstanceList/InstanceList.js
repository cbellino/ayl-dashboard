import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './InstanceList.scss'
import InstanceItemContainer from '../../containers/InstanceItemContainer'

const InstanceList = ({ instances }) => {

  const instanceNodes = instances.map((instance) =>
    <InstanceItemContainer key={instance.get('key')} instance={instance} />
  )

  return (
    <div className={s.root}>
      {instanceNodes}
    </div>
  )
}

InstanceList.propTypes = {
  instances: ImmutablePropTypes.list.isRequired
}

export default withStyles(s)(InstanceList)
