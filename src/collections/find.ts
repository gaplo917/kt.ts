import { findLast } from 'lodash'

declare global {
  interface Array<T> extends KtListFindOp<T> {}
}

export interface KtListFindOp<T> {
  // Do not contaminate existing Array<T>
  // find(predicate: (value: T) => boolean): T | null

  /**
   * Returns the last element matching the given [predicate], or `null` if no such element was found.
   */
  findLast(predicate: (value: T) => boolean): T | null
}

export default <T extends any>(proto: Array<T>) => {
  proto.findLast = function (predicate: (value: T) => boolean): T | null {
    return findLast(this, predicate) ?? null
  }
}
