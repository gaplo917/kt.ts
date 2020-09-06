import injectFilterExtra from './filter-extra'

describe('filter-extra', () => {
  injectFilterExtra(Array.prototype)

  test('filterNotEmpty', () => {
    expect(['a', 'b', 'c'].ktFilterNotEmpty()).toStrictEqual(['a', 'b', 'c'])

    expect(['a', 'b', 'c', null, undefined, ''].ktFilterNotEmpty()).toStrictEqual(['a', 'b', 'c'])
  })
})
