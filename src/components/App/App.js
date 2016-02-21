import React, { Component, PropTypes } from 'react'
import emptyFunction from 'fbjs/lib/emptyFunction'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import s from './App.scss'
import Header from '../Header/Header'
import configureStore from '../../core/configureStore'
import { startListeningToInstances } from '../../actions/instances'

const store = configureStore()

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onSetMeta: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired
  };

  getChildContext() {
    const context = this.props.context
    return {
      insertCss: context.insertCss || emptyFunction,
      onSetTitle: context.onSetTitle || emptyFunction,
      onSetMeta: context.onSetMeta || emptyFunction,
      onPageNotFound: context.onPageNotFound || emptyFunction
    }
  }

  componentWillMount() {
    this.removeCss = this.props.context.insertCss(s)
  }

  componentWillUnmount() {
    this.removeCss()
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale={'en'}>
          <div>
            <Header />
            {this.props.children}
          </div>
        </IntlProvider>
      </Provider>
    )
  }

}

export default App

setTimeout(function () {
  store.dispatch(startListeningToInstances())
})
