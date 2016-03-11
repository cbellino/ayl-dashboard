import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import MonitorsToolbar from './MonitorsToolbar'
import SliderMonitor from 'redux-slider-monitor'
import Dispatcher from 'redux-devtools-dispatch'
import DiffMonitor from 'redux-devtools-diff-monitor'
import ChartMonitor from 'redux-devtools-chart-monitor-immutable'

import * as Colors from 'material-ui/lib/styles/colors'
import SliderIcon from 'material-ui/lib/svg-icons/editor/linear-scale'
import LogIcon from 'material-ui/lib/svg-icons/navigation/menu'
import DispatcherIcon from 'material-ui/lib/svg-icons/communication/present-to-all'
import DiffIcon from 'material-ui/lib/svg-icons/communication/call-split'
import ChartIcon from 'material-ui/lib/svg-icons/hardware/device-hub'

const DevTools = createDevTools(
  <MonitorsToolbar>
    <SliderMonitor keyboardEnabled icon={<SliderIcon color={Colors.white} />} />
    <LogMonitor theme="solarized" icon={<LogIcon color={Colors.white} />} />
    <Dispatcher icon={<DispatcherIcon color={Colors.white} />} />
    <DiffMonitor icon={<DiffIcon color={Colors.white} />} />
    <ChartMonitor hasImmutables={true} icon={<ChartIcon color={Colors.white} />} />
  </MonitorsToolbar>
)

export default DevTools
