import { filter } from 'lodash'

declare global {
  interface Array<T> extends KtListFilterOp<T> {}
}

export interface KtListFilterOp<T> {
  // Do not contaminate existing Array<T>
  // filter(predicate: (value: T) => boolean): T[]

  filterIndexed(predicate: (index: number, value: T) => boolean): T[]

  filterNot(predicate: (value: T) => boolean): T[]

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
