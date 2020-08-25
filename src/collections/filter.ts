import { filter } from 'lodash'

declare global {
  interface Array<T> extends KtListFilterOp<T> {}
}

export interface KtListFilterOp<T> {
  // Do not contaminate existing Array<T>
  // filter(predicate: (value: T) => boolean): T[]

  /**
   * Returns a list containing only elements matching the given [predicate].
   * @param [predicate] function that takes the index of an element and the element itself
   * and returns the result of predicate evaluation on the element.
   */
  filterIndexed(predicate: (index: number, value: T) => boolean): T[]

  /**
   * Returns a list containing all elements not matching the given [predicate].
   */
  filterNot(predicate: (value: T) => boolean): T[]

  /**
   * Returns a list containing all elements that are not `null`.
   */
  filterNotNull(): Array<NonNullable<T>>
}

export default <T extends any>(proto: Array<T>) => {
  proto.filterNot = function (predicate: (value: T) => boolean): T[] {
    return filter(this, value => !predicate(value))
  }

  proto.filterNotNull = function (): Array<NonNullable<T>> {
    return filter(this, value => value !== null && value !== undefined) as Array<NonNullable<T>>
  }

  proto.filterNotEmpty = function (): Array<NonNullable<T>> {
    return filter(this, value => value !== null && value !== undefined && value !== '') as Array<
      NonNullable<T>
    >
  }
}
