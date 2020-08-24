import { uniq, uniqBy } from 'lodash'

declare global {
  interface Array<T> extends KtListDistinctOp<T> {}
}

export interface KtListDistinctOp<T> {
  distinct(): T[]

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
