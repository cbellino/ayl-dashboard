// Forked from https://github.com/YoruNoHikage/redux-devtools-multiple-monitors/blob/master/src/MultipleMonitors.js

import React, { Component, cloneElement } from 'react'
// TODO: Remove the dependency on material-ui.
import IconButton from 'material-ui/IconButton'

const styles = {
  SliderMonitor: {
    position: 'fixed',
    right: '0',
    bottom: '0',
    left: '0',
    zIndex: '3'
  },
  LogMonitor: {
    position: 'fixed',
    width: '350px',
    top: '0',
    right: '0',
    bottom: '0',
    zIndex: '3'
  },
  Dispatcher: {
    position: 'fixed',
    width: '500px',
    top: '-5px',
    left: '0',
    zIndex: '3'
  },
  ManifestComponent: {
    position: 'fixed',
    width: '380px',
    top: '0',
    right: '0',
    bottom: '0',
    zIndex: '3'
  },
  ChartMonitor: {
    position: 'fixed',
    top: '80px',
    height: '100%',
    right: '0',
    left: '0',
    zIndex: '2'
  }
}

const childrenMonitorState = (props, state, action) => (
  props.children.map(child => child.type.update(child.props, state, action))
)

const reducer = (props, state = {}, action) => (
  { childrenMonitorState: childrenMonitorState(props, state.childMonitorState, action) }
)

const Monitor = ({ monitor, monitorState, visible = false, ...rest }) => (
  <div>
    {visible ? (
      <div style={styles[monitor.type.name]}>
        {cloneElement(monitor, { ...rest, monitorState: monitorState } )}
      </div>
    ) : ''}
  </div>
)

export default class MonitorsToolbar extends Component {
  static update = reducer;

  constructor(props) {
    super(props)

    let state = {}
    props.children.forEach( monitor => {
      state[monitor.type.name] = {
        visible: false
      }
    })
    this.state = state
  }

  toggleMonitor(monitorName) {
    let visible = this.state[monitorName].visible
    this.setState({
      ...this.state,
      [`${monitorName}`]: { visible: !visible }
    })
  }

  render() {
    const { monitorState, children, ...rest } = this.props

    const monitorIcons = children.map((monitor, i) => (
      <IconButton
        key={`monitor-icon-${i}`}
        tooltip={monitor.type.name}
        onClick={this.toggleMonitor.bind(this, monitor.type.name)}
      >
        {monitor.props.icon}
      </IconButton>
    ))

    const monitorNodes = children.map((monitor, i) => {
      return(
        <Monitor
          {...rest}
          key={`monitor-${i}`}
          monitor={monitor}
          monitorState={monitorState.childrenMonitorState[i]}
          visible={this.state[monitor.type.name].visible}
        />
      )
    })

    return (
      <div>
        <div>{monitorIcons}</div>
        <div>{monitorNodes}</div>
      </div>
    )
  }
}

export default MonitorsToolbar
