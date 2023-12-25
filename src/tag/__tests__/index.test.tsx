import React from 'react'
// @ts-ignore
import { mount } from 'enzyme'
import{ Tag} from '../../index'

describe('Tag', () => {
  it('render normal Tag correctly', () => {
    const wrapper = mount(<Tag text="Tag1">normal</Tag>)

    expect(wrapper).toMatchSnapshot()
  })
})
