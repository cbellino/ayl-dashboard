import React from 'react'
import WithContext from 'react-with-context'

const InsertCssContext = (getStory) => (
  <WithContext context={{ insertCss: function () {} }}>
    {getStory()}
  </WithContext>
)

export default InsertCssContext
