import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import DevTools from '../../containers/DevTools/DevTools'
import s from './Header.scss'

const Header = () => (
  <div className={s.root}>
    <div className={s.container}>
      <img src={require('./logo-small.png')} width="38" height="38" alt="React" />
      <span className={s.brandTxt}>Adyoulike</span>
      <div className={s.devTools}>
        {/* TODO: Move DevTools to an external package and DO NOT require it in production g*/}
        {process.env.NODE_ENV !== 'production' ? <DevTools /> : ''}
      </div>
    </div>
  </div>
)

export default withStyles(Header, s)
