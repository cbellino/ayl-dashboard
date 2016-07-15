import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import RefreshIndicator from 'material-ui/RefreshIndicator'

import s from './InstanceList.scss'
import InstanceItemContainer from '../../containers/InstanceItemContainer'

const InstanceList = ({ instances }) => {

  const instanceNodes = () => (
    instances.size > 0 ? (
      instances.map((instance) =>
        <InstanceItemContainer
          key={instance.get('key')}
          instance={instance}
        />
      )
    ) : (
      <div className={s.loader}>
        <RefreshIndicator
          size={96}
          left={-48}
          top={0}
          status="loading"
        />
      </div>
    )
  )

  return (
    <div className={s.root}>
      {instanceNodes()}
    </div>
  )
}

InstanceList.propTypes = {
  instances: ImmutablePropTypes.list.isRequired
}

export default withStyles(s)(InstanceList)
