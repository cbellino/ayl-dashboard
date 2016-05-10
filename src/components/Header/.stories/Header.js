import React from 'react'
import { storiesOf } from '@kadira/storybook'

import InsertCssContext from '../../../../.storybook/InsertCssContext'
import Header from '../Header'

storiesOf('Header', module)
  .addDecorator(InsertCssContext)
  .add('default', () => (
    <Header />
  ))
