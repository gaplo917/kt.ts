import { ktForEach } from '../standalone/ktForEach'
import { ktForEachIndexed } from '../standalone/ktForEachIndexed'

declare global {
  interface Array<T> extends KtListForEachOp<T> {}
}

export interface KtListForEachOp<T> {
  ktForEach(action: (value: T) => void): void

  /**
   * Performs the given [action] on each element, providing sequential index with the element.
   * @param [action] function that takes the index of an element and the element itself
   * and performs the desired action on the element.
   */
  ktForEachIndexed(action: (index: number, value: T) => void): void
}

export default <T extends any>(proto: Array<T>) => {
  proto.ktForEach = function (action: (value: T) => void): void {
    return ktForEach(this, action)
  }

  proto.ktForEachIndexed = function (action: (index: number, value: T) => void): void {
    return ktForEachIndexed(this, action)
  }
}
