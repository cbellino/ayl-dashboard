import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { CardActions } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import CheckIcon from 'material-ui/svg-icons/navigation/check'
import { defaultMuiTheme } from '../../../config'

import s from './InstanceActions.scss'

const InstanceActions = ({ editing, onStartEditing, onStopEditing, onSave }) => {

  const actionColor = defaultMuiTheme.baseTheme.palette.textColor

  const saveButtonNode = editing ? (
    <IconButton
      primary={true}
      tooltip={'Save'}
      onClick={onSave}
    >
      <CheckIcon color={actionColor} />
    </IconButton>
  ) : null


  const editButtonNode = !editing ? (
    <IconButton
      primary={true}
      tooltip={'Edit'}
      onClick={onStartEditing}
    >
      <ModeEditIcon color={actionColor} />
    </IconButton>
  ) : null

  const cancelEditButtonNode = editing ? (
    <IconButton
      primary={true}
      tooltip={'Cancel'}
      onClick={onStopEditing}
    >
      <CloseIcon color={actionColor} />
    </IconButton>
  ) : null

  return (
    <CardActions className={s.root}>
      {editButtonNode}
      {cancelEditButtonNode}
      {saveButtonNode}
    </CardActions>
  )
}

InstanceActions.propTypes = {
  editing: PropTypes.bool.isRequired,
  onStartEditing: PropTypes.func.isRequired,
  onStopEditing: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default withStyles(s)(InstanceActions)
