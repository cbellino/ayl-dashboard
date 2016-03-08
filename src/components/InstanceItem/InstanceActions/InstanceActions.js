import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import CardActions from 'material-ui/lib/card/card-actions'
import FlatButton from 'material-ui/lib/flat-button'
import ImmutablePropTypes from 'react-immutable-proptypes'

import s from './InstanceActions.scss'

const InstanceActions = ({ instance, editing, onStartEditing, onStopEditing, onSave }) => {

  const saveButtonNode = editing ? (
    <FlatButton
      label={'Save'}
      className={s.action}
      onClick={onSave}
    />
  ) : <div></div>

  return (
    <CardActions className={s.root}>
      <FlatButton
        label={'Open'}
        linkButton={true}
        href={instance.get('url')}
        className={s.action}
        target="_blank"
      />
      <FlatButton
        label={editing ? 'Cancel' : 'Edit'}
        className={s.action}
        onClick={editing ? onStopEditing : onStartEditing}
      />
      {saveButtonNode}
    </CardActions>
  )
}

InstanceActions.propTypes = {
  editing: PropTypes.bool.isRequired,
  onStartEditing: PropTypes.func.isRequired,
  onStopEditing: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(InstanceActions, s)
