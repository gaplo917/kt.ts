import { ktFirst } from '../standalone/ktFirst'
import { ktFirstOrNull } from '../standalone/ktFirstOrNull'

declare global {
  interface Array<T> extends KtListFirstOp<T> {}
}

export interface KtListFirstOp<T> {
  /**
   * Returns first element.
   * @throws [NoSuchElementError] if the collection is empty.
   */
  ktFirst(): T

  /**
   * Returns the first element matching the given [predicate].
   * @throws [NoSuchElementError] if no such element is found.
   */
  ktFirst(predicate: (value: T) => boolean): T

  /**
   * Returns the first element, or `null` if the collection is empty.
   */
  ktFirstOrNull(): T | null

  /**
   * Returns the first element matching the given [predicate], or `null` if element was not found.
   */
  ktFirstOrNull(predicate: (value: T) => boolean): T | null
}

export default <T extends any>(proto: Array<T>) => {
  proto.ktFirst = function (predicate?: (value: T) => boolean): T {
    return ktFirst(this, predicate)
  }

  proto.ktFirstOrNull = function (predicate?: (value: T) => boolean): T | null {
    return ktFirstOrNull(this, predicate)
  }
}
