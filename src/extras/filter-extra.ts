import { filter } from 'lodash'

declare global {
  interface Array<T> extends TsListFilterOp<T> {}
}

export interface TsListFilterOp<T> {
  filterNotEmpty(): Array<NonNullable<T>>
}

export default <T extends any>(proto: Array<T>) => {
  proto.filterNotEmpty = function (): Array<NonNullable<T>> {
    return filter(this, value => value !== null && value !== undefined && value !== '') as Array<
      NonNullable<T>
    >
  }
}
