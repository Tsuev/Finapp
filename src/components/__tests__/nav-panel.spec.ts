import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavPanel from '../nav-panel.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(NavPanel, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
