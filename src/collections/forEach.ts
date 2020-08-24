declare global {
  interface Array<T> extends KtListForEachOp<T> {}
}

export interface KtListForEachOp<T> {
  // Do not contaminate existing Array<T>
  // forEach(action: (value: T) => void): void

  forEachIndexed(action: (value: T, index: number) => void): void
}

export default <T extends any>(proto: Array<T>) => {
  proto.forEachIndexed = function (action: (value: T, index: number) => void): void {
    return this.forEach(action)
  }
}
