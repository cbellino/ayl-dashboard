import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import CardActions from 'material-ui/lib/card/card-actions'
import IconButton from 'material-ui/lib/icon-button'
import ModeEditIcon from 'material-ui/lib/svg-icons/editor/mode-edit'
import CloseIcon from 'material-ui/lib/svg-icons/navigation/close'
import CheckIcon from 'material-ui/lib/svg-icons/navigation/check'
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'

import s from './InstanceActions.scss'

const InstanceActions = ({ editing, onStartEditing, onStopEditing, onSave }) => {

  const muiTheme = getMuiTheme()
  const actionColor = muiTheme.baseTheme.palette.textColor

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

export default withStyles(InstanceActions, s)
