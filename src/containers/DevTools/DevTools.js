import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import MonitorsToolbar from './MonitorsToolbar'
import SliderMonitor from 'redux-slider-monitor'
import Dispatcher from 'redux-devtools-dispatch'
import DiffMonitor from 'redux-devtools-diff-monitor'
import ChartMonitor from 'redux-devtools-chart-monitor-immutable'

import { white } from 'material-ui/styles/colors'
import SliderIcon from 'material-ui/svg-icons/editor/linear-scale'
import LogIcon from 'material-ui/svg-icons/navigation/menu'
import DispatcherIcon from 'material-ui/svg-icons/communication/present-to-all'
import DiffIcon from 'material-ui/svg-icons/communication/call-split'
import ChartIcon from 'material-ui/svg-icons/hardware/device-hub'

const DevTools = createDevTools(
  <MonitorsToolbar>
    <SliderMonitor keyboardEnabled icon={<SliderIcon color={white} />} />
    <LogMonitor theme="solarized" icon={<LogIcon color={white} />} />
    <Dispatcher icon={<DispatcherIcon color={white} />} />
    <DiffMonitor icon={<DiffIcon color={white} />} />
    <ChartMonitor hasImmutables={true} icon={<ChartIcon color={white} />} />
  </MonitorsToolbar>
)

export default DevTools
