declare global {
  interface Array<T> extends KtListForEachOp<T> {}
}

export interface KtListForEachOp<T> {
  // Do not contaminate existing Array<T>
  // forEach(action: (value: T) => void): void

  /**
   * Performs the given [action] on each element, providing sequential index with the element.
   * @param [action] function that takes the index of an element and the element itself
   * and performs the desired action on the element.
   */
  forEachIndexed(action: (value: T, index: number) => void): void
}

export default <T extends any>(proto: Array<T>) => {
  proto.forEachIndexed = function (action: (value: T, index: number) => void): void {
    return this.forEach(action)
  }
}
