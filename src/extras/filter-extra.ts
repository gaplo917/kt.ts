import { ktFilterNotEmpty } from '../standalone/ktFilterNotEmpty'

declare global {
  interface Array<T> extends TsListFilterOp<T> {}
}

export interface TsListFilterOp<T> {
  ktFilterNotEmpty(): Array<NonNullable<T>>
}

export default <T extends string>(proto: Array<T>) => {
  proto.ktFilterNotEmpty = function (): Array<NonNullable<T>> {
    return ktFilterNotEmpty(this)
  }
}
