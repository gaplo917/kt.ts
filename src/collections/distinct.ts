import { uniq, uniqBy } from 'lodash'

declare global {
  interface Array<T> extends KtListDistinctOp<T> {}
}

export interface KtListDistinctOp<T> {
  /**
   * Returns a list containing only distinct elements from the given collection.
   *
   * The elements in the resulting list are in the same order as they were in the source collection.
   */
  distinct(): T[]

  /**
   * Returns a list containing only elements from the given collection
   * having distinct keys returned by the given [selector] function.
   *
   * The elements in the resulting list are in the same order as they were in the source collection.
   */
  distinctBy<K>(selector: (value: T) => K): T[]
}

export default <T extends any>(proto: Array<T>) => {
  proto.distinct = function (): T[] {
    return uniq(this)
  }

  proto.distinctBy = function <R>(selector: (value: T) => R) {
    return uniqBy(this, selector)
  }
}
