import { ktElementAt } from '../standalone/ktElementAt'
import { ktElementAtOrElse } from '../standalone/ktElementAtOrElse'
import { ktElementAtOrNull } from '../standalone/ktElementAtOrNull'

declare global {
  interface Array<T> extends KtListElementAtOp<T> {}
}

export interface KtListElementAtOp<T> {
  /**
   * Returns an element at the given [index] or throws an [IndexOutOfBoundsError] if the [index] is out of bounds of this collection.
   */
  ktElementAt(index: number): T

  /**
   * Returns an element at the given [index] or the result of calling the [defaultValue] function if the [index] is out of bounds of this collection.
   */
  ktElementAtOrElse(index: number, defaultValue: (index: number) => T): T

  /**
   * Returns an element at the given [index] or `null` if the [index] is out of bounds of this collection
   */
  ktElementAtOrNull(index: number): T | null
}

export default <T extends any>(proto: Array<T>) => {
  proto.ktElementAt = function (index: number): T {
    return ktElementAt(this, index)
  }

  proto.ktElementAtOrElse = function (index: number, defaultValue: (index: number) => T): T {
    return ktElementAtOrElse(this, index, defaultValue)
  }

  proto.ktElementAtOrNull = function (index: number): T | null {
    return ktElementAtOrNull(this, index)
  }
}
