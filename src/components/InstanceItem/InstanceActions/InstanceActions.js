import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import CardActions from 'material-ui/lib/card/card-actions'
import FlatButton from 'material-ui/lib/flat-button'

import s from './InstanceActions.scss'

const InstanceActions = ({ editing, onStartEditing, onStopEditing, onSave }) => {
  const saveButtonNode = editing ? (
    <FlatButton
      label={'Save'}
      className={s.action}
      secondary={true}
      onClick={onSave}
    />
  ) : <div></div>

  return (
    <CardActions className={s.root}>
      <FlatButton
        label={editing ? 'Cancel' : 'Edit'}
        className={s.action}
        secondary={true}
        onClick={editing ? onStopEditing : onStartEditing}
      />
      {saveButtonNode}
    </CardActions>
  )
}

export default withStyles(InstanceActions, s)
