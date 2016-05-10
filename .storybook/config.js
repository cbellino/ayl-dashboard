import { configure } from '@kadira/storybook'

function loadStories() {
  require('../src/components/Header/.stories')
  require('../src/components/InstanceItem/.stories')
}

configure(loadStories, module)
