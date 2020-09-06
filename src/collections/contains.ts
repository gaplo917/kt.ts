import { ktContains } from '../standalone/ktContains'
import { ktContainsAll } from '../standalone/ktContainsAll'

declare global {
  interface Array<T> extends KtListContainsOp<T> {}
}

export interface KtListContainsOp<T> {
  /**
   * Checks if the specified element is contained in this collection.
   * This function use deep-equal(recursive equality algorithm) instead of SameValueZero
   */
  ktContains(element: T): boolean

  /**
   * Checks if all elements in the specified collection are contained in this collection.
   * This function use deep-equal(recursive equality algorithm) instead of SameValueZero
   */
  ktContainsAll(elements: Array<T>): boolean
}

export default <T extends any>(proto: Array<T>) => {
  proto.ktContains = function (element: T): boolean {
    return ktContains(this, element)
  }

  proto.ktContainsAll = function (elements: T[]): boolean {
    return ktContainsAll(this, elements)
  }
}
