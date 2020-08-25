import injectFilterExtra from './filter-extra'

describe('filter-extra', () => {
  injectFilterExtra(Array.prototype)

  test('filterNotEmpty', () => {
    expect(['a', 'b', 'c'].filterNotEmpty()).toStrictEqual(['a', 'b', 'c'])

    expect(['a', 'b', 'c', null, undefined, ''].filterNotEmpty()).toStrictEqual(['a', 'b', 'c'])
  })
})
