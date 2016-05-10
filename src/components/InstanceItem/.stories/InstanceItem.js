import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Map } from 'immutable'
import { IntlProvider } from 'react-intl'

import InsertCssContext from '../../../../.storybook/InsertCssContext'
import InstanceItem from '../InstanceItem'

const instance1 = Map({
  name: 'Awesome instance',
  requested_by: 'Malcolm Reynolds',
  updated_at: 1462921499,
  comment: 'This is the captain. We have a little problem with our entry sequence, so we may experience some slight turbulence and then - explode.'
})
const instance2 = instance1.update('status', () => 'used')
const instance3 = instance1.update('status', () => 'locked')

storiesOf('InstanceItem', module)
  .addDecorator(InsertCssContext)
  .addDecorator((getStory) => (
    <IntlProvider locale={'en'}>
      {getStory()}
    </IntlProvider>
  ))
  .add('default', () => (
    <InstanceItem instance={instance1} />
  ))
  .add('in use', () => (
    <InstanceItem instance={instance2} />
  ))
  .add('locked', () => (
    <InstanceItem instance={instance3} />
  ))
