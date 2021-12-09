import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../../app/components/Button'

describe('Button test', () => {
  const testData = {
    text: 'test',
    onPress: () => {},
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(<Button text={testData.text} onPress={testData.onPress} />)
      .toJSON()
    expect(tree).toBeDefined()
    expect(tree).toMatchSnapshot()
  })
})
