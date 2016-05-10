import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DevTools from '../../containers/DevTools/DevTools'
import { defaultMuiTheme } from '../../config'

import s from './Header.scss'

// TODO: Move DevTools to an external package and DO NOT require it in production.
const Header = ({ showDevTools = false }) => (
  <div className={s.root}>
    <MuiThemeProvider muiTheme={defaultMuiTheme}>
      <AppBar
        title={'Adyoulike Tools'}
        iconElementRight={showDevTools ? <DevTools /> : null}
      />
    </MuiThemeProvider>
  </div>
)

Header.propTypes = {
  showDevTools: React.PropTypes.bool
}

export default withStyles(s)(Header)
