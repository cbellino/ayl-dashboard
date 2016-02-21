import React from 'react'
import Router from 'react-routing/src/Router'
import App from './components/App/App'
import IndexPage from './components/IndexPage/IndexPage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import ErrorPage from './components/ErrorPage/ErrorPage'

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next()
    return component && <App context={state.context}>{component}</App>
  })

  on('/', async () => <IndexPage />)

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  )
})

export default router
