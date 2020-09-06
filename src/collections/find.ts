import { ktFind } from '../standalone/ktFind'
import { ktFindLast } from '../standalone/ktFindLast'

declare global {
  interface Array<T> extends KtListFindOp<T> {}
}

export interface KtListFindOp<T> {
  ktFind(predicate: (value: T) => boolean): T | null

  /**
   * Returns the last element matching the given [predicate], or `null` if no such element was found.
   */
  ktFindLast(predicate: (value: T) => boolean): T | null
}

export default <T extends any>(proto: Array<T>) => {
  proto.ktFind = function (predicate: (value: T) => boolean): T | null {
    return ktFind(this, predicate)
  }

  proto.ktFindLast = function (predicate: (value: T) => boolean): T | null {
    return ktFindLast(this, predicate)
  }
}
