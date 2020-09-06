import { ktDistinctBy } from '../standalone/ktDistinctBy'
import { ktDistinct } from '../standalone/ktDistinct'

declare global {
  interface Array<T> extends KtListDistinctOp<T> {}
}

export interface KtListDistinctOp<T> {
  /**
   * Returns a list containing only distinct elements from the given collection.
   *
   * The elements in the resulting list are in the same order as they were in the source collection.
   */
  ktDistinct(): T[]

  /**
   * Returns a list containing only elements from the given collection
   * having distinct keys returned by the given [selector] function.
   *
   * The elements in the resulting list are in the same order as they were in the source collection.
   */
  ktDistinctBy<K>(selector: (value: T) => K): T[]
}

export default <T extends any>(proto: Array<T>) => {
  proto.ktDistinct = function (): T[] {
    return ktDistinct<T>(this)
  }

  proto.ktDistinctBy = function <K>(selector: (value: T) => K): T[] {
    return ktDistinctBy<T, K>(this, selector)
  }
}
