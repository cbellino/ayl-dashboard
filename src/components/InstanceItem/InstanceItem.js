import React, { Component } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { animateScroll } from 'react-scroll'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import classnames from 'classnames'
import FreeIcon from 'material-ui/svg-icons/navigation/check'
import InUseIcon from 'material-ui/svg-icons/action/schedule'
import LockedIcon from 'material-ui/svg-icons/action/lock-outline'

import s from './InstanceItem.scss'

const OFFSET_TOP = 64
const MARGIN_TOP = 8
const EXPAND_ANIMATION_DURATION = 200
const SCROLL_DURATION = 150

class InstanceItem extends Component {

  constructor() {
    super()
    this.state = { expanded: false }
  }

  expand() {
    this.setState({ expanded: !this.state.expanded })
    return new Promise(resolve => {
      setTimeout(resolve, EXPAND_ANIMATION_DURATION)
    })
  }

  scrollIntoView() {
    let top = this.rootElement.offsetTop - OFFSET_TOP - MARGIN_TOP
    return new Promise(resolve => {
      animateScroll.scrollTo(top, { duration: SCROLL_DURATION, smooth: true })
      setTimeout(resolve, SCROLL_DURATION)
    })
  }

  // TODO: Do this in a separate file that handles only animations ?
  // TODO: Reduce other items.
  toggleExpanded() {
    this.expand()
      .then(this.scrollIntoView.bind(this))
      .then(() => console.debug('Transition done.'))
  }

  // TODO: Transform this into a component.
  statusIcon() {
    const { instance } = this.props
    switch(instance.get('status')) {
      case 'locked':
        return <LockedIcon />
      case 'used':
        return <InUseIcon />
      default:
        return <FreeIcon />
    }
  }

  render() {
    const { expanded } = this.state
    const { instance } = this.props
    const rootClasses = classnames({
      [s.root]: true,
      [s.expanded]: expanded,
      [s[`status_${instance.get('status')}`]]: true
    })

    return (
      <div
        className={rootClasses}
        onClick={this.toggleExpanded.bind(this)}
        ref={(ref) => this.rootElement = ref}
      >
        <div className={s.mainContent}>
          <h2 className={s.primaryText}>{instance.get('name')}</h2>
          <h4 className={s.subtext}>{instance.get('requested_by')}</h4>
          <div className={s.content}>{instance.get('comment')}</div>
        </div>
        <div className={s.image}>
          {this.statusIcon()}
        </div>
      </div>
    )
  }
}

InstanceItem.propTypes = {
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(s)(InstanceItem)
