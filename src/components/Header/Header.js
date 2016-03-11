import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import AppBar from 'material-ui/lib/app-bar'
import DevTools from '../../containers/DevTools/DevTools'

import s from './Header.scss'

// TODO: Move DevTools to an external package and DO NOT require it in production.
const Header = () => (
  <div className={s.root}>
    <AppBar
      title={'Adyoulike Tools'}
      iconElementRight={process.env.NODE_ENV !== 'production' ? <DevTools /> : null}
    />
  </div>
)

export default withStyles(Header, s)
