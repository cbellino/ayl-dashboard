import React, { Component } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { animateScroll } from 'react-scroll'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import classnames from 'classnames'
import EditIcon from 'material-ui/svg-icons/image/edit'
import SaveIcon from 'material-ui/svg-icons/navigation/check'
import ga from 'react-ga'

import s from './InstanceItem.scss'
import InstanceForm from './InstanceForm/InstanceForm'

const OFFSET_TOP = 64
const MARGIN_TOP = 8
const EXPAND_ANIMATION_DURATION = 200
const SCROLL_DURATION = 150

class InstanceItem extends Component {

  constructor() {
    super()
    this.state = { editing: false }
  }

  expand() {
    this.setState({ editing: !this.state.editing })
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

  toggleEditing() {
    if (this.state.editing) {
      this.save(this.state.instance)
    } else {
      this.edit()
    }
  }

  // TODO: Do this in a separate file that handles only animations ?
  // TODO: Reduce other items.
  edit() {
    this.expand()
      .then(this.scrollIntoView.bind(this))
      .then(() => {
        ga.event( { category: 'Instance', action: 'Start editing' } )
        this.setState({ editing: true })
      })
  }

  save(instance) {
    ga.event( { category: 'Instance', action: 'Save' } )
    this.setState({ editing: false })
    this.props.onSave(instance)
  }

  handleChange(instance) {
    this.setState({ instance: instance })
  }

  render() {
    const { editing } = this.state
    const { instance } = this.props
    const rootClasses = classnames({
      [s.root]: true,
      [s.editing]: editing,
      [s[`status_${instance.get('status')}`]]: true
    })

    return (
      <div
        className={rootClasses}
        ref={(ref) => this.rootElement = ref}
      >
        <div className={s.mainContent}>
          {!editing ? (
            <div>
              <h2 className={s.primaryText}>{instance.get('name')}</h2>
              <h4 className={s.subtext}>{instance.get('requested_by')}</h4>
              <div className={s.content}>{instance.get('comment')}</div>
            </div>
          ) : (
            <InstanceForm
              instance={instance}
              onChange={this.handleChange.bind(this)}
            />
          )}
        </div>
        <div className={s.image} onClick={this.toggleEditing.bind(this)}>
          {editing ? <SaveIcon /> : <EditIcon />}
        </div>
      </div>
    )
  }
}

InstanceItem.propTypes = {
  instance: ImmutablePropTypes.map.isRequired
}

export default withStyles(s)(InstanceItem)
