declare global {
  interface Array<T> extends KtListElementAtOp<T> {}
}

export interface KtListElementAtOp<T> {
  /**
   * Returns an element at the given [index] or throws an [IndexOutOfBoundsError] if the [index] is out of bounds of this collection.
   */
  elementAt(index: number): T

  /**
   * Returns an element at the given [index] or the result of calling the [defaultValue] function if the [index] is out of bounds of this collection.
   */
  elementAtOrElse(index: number, defaultValue: (index: number) => T): T

  /**
   * Returns an element at the given [index] or `null` if the [index] is out of bounds of this collection
   */
  elementAtOrNull(index: number): T | null
}

export default <T extends any>(proto: Array<T>) => {
  proto.elementAt = function (index: number): T {
    if (this.length === 0 || index >= this.length) {
      throw new Error('IndexOutOfBoundError')
    }
    return this[index]
  }

  proto.elementAtOrElse = function (index: number, defaultValue: (index: number) => T): T {
    return this[index] ?? defaultValue(index)
  }

  proto.elementAtOrNull = function (index: number): T | null {
    return this[index] ?? null
  }
}
