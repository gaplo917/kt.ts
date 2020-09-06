import { ktFilter } from '../standalone/ktFilter'
import { ktFilterIndexed } from '../standalone/ktFilterIndexed'
import { ktFilterNot } from '../standalone/ktFilterNot'
import { ktFilterNotNull } from '../standalone/ktFilterNotNull'

declare global {
  interface Array<T> extends KtListFilterOp<T> {}
}

export interface KtListFilterOp<T> {
  ktFilter(predicate: (value: T) => boolean): T[]

  /**
   * Returns a list containing only elements matching the given [predicate].
   * @param [predicate] function that takes the index of an element and the element itself
   * and returns the result of predicate evaluation on the element.
   */
  ktFilterIndexed(predicate: (index: number, value: T) => boolean): T[]

  /**
   * Returns a list containing all elements not matching the given [predicate].
   */
  ktFilterNot(predicate: (value: T) => boolean): T[]

  /**
   * Returns a list containing all elements that are not `null`.
   */
  ktFilterNotNull(): Array<NonNullable<T>>
}

export default <T extends any>(proto: Array<T>) => {
  proto.ktFilter = function (predicate: (value: T) => boolean): T[] {
    return ktFilter(this, predicate)
  }

  proto.ktFilterIndexed = function (predicate: (index: number, value: T) => boolean): T[] {
    return ktFilterIndexed(this, predicate)
  }

  proto.ktFilterNot = function (predicate: (value: T) => boolean): T[] {
    return ktFilterNot(this, predicate)
  }

  proto.ktFilterNotNull = function (): Array<NonNullable<T>> {
    return ktFilterNotNull(this)
  }
}
