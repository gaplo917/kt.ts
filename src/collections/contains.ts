import { includes, difference } from 'lodash'

declare global {
  interface Array<T> extends KtListContainsOp<T> {}
}

export interface KtListContainsOp<T> {
  contains(element: T): boolean

  containsAll(elements: Array<T>): boolean
}

export default <T extends any>(proto: Array<T>) => {
  proto.contains = function (element: T): boolean {
    return includes(this, element)
  }

  // ref: https://github.com/lodash/lodash/issues/1743#issuecomment-170598139
  proto.containsAll = function (elements: T[]): boolean {
    return difference(elements, this).length === 0
  }
}
