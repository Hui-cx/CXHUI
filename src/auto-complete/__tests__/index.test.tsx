import React from 'react'
// @ts-ignore
import type { ReactWrapper } from 'enzyme';
// @ts-ignore
import { mount } from 'enzyme'
import type { AutoCompleteProps } from '../autoComplete';
import AutoComplete from '../autoComplete'
import { act } from 'react-dom/test-utils'

jest.useFakeTimers()

export const waitForWrapperToPaint = async (wrapper: ReactWrapper, delay = 500) => {
  await act(async () => {
    jest.advanceTimersByTime(delay)
    wrapper.update()
  })
}


const testArray = [
  { value: 'ab', number: 11 },
  { value: 'abc', number: 1 },
  { value: 'b', number: 4 },
  { value: 'c', number: 15 },
]

let wrapper: ReactWrapper
let inputNode: ReactWrapper

const testProps: AutoCompleteProps = {
  onSearch: query => testArray.filter(item => item.value.includes(query)),
  onSelect: jest.fn(),
  placeholder: 'This is a placeholder',
}

describe('AutoComplete', () => {
  beforeEach(() => {
    wrapper = mount(<AutoComplete {...testProps} />)
    inputNode = wrapper.find('input')
  })

  it('test basic AutoComplete behavior', () => {
    expect(inputNode.prop('placeholder')).toBe(testProps.placeholder)
    inputNode.simulate('change', { target: { value: 'a' } })
    waitForWrapperToPaint(wrapper, 1000)
    // should have two suggestion items
    expect(wrapper.find('.suggestion-item').length).toEqual(2)
    // click the first item
    wrapper
      .find('.suggestion-item')
      .first()
      .simulate('click')
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
    expect(wrapper).toMatchSnapshot()
  })

  // TODO: test case - should provide keyboard support
  // TODO: test case - click outside should hide the dropdown
})
