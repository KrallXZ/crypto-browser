import React from 'react'
import SearchBar from '../SearchBar'
import renderer from 'react-test-renderer'

test('SearchBar renders correctly', () => {
  const component = renderer.create(<SearchBar />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('SearchBar renders as input', () => {
  const component = renderer.create(<SearchBar />)
  let tree = component.toJSON()
  expect(tree.children[0].type).toBe('input')
})