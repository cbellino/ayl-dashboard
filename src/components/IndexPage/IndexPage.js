import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './IndexPage.scss'
import InstanceListContainer from '../../containers/InstanceListContainer'

const title = 'Dashboard - Adyoulike'

class IndexPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.context.onSetTitle(title)
  }

  render() {
    return (
      <div className={s.root}>
        <InstanceListContainer />
      </div>
    )
  }

}

export default withStyles(IndexPage, s)
