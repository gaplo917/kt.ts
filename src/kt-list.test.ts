import './kt-list'
import { arrayOf } from './kt-list'

describe('test the kt-list injection', () => {
  test('arrayOf', () => {
    expect(arrayOf(1, 2, 3)).toStrictEqual([1, 2, 3])
  })

  test('prototype injection', () => {
    // TODO: when all implementation is ready
  })
})
