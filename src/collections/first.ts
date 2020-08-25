declare global {
  interface Array<T> extends KtListFirstOp<T> {}
}

export interface KtListFirstOp<T> {
  /**
   * Returns first element.
   * @throws [NoSuchElementError] if the collection is empty.
   */
  first(): T

  /**
   * Returns the first element matching the given [predicate].
   * @throws [NoSuchElementError] if no such element is found.
   */
  first(predicate: (value: T) => boolean): T

  /**
   * Returns the first element, or `null` if the collection is empty.
   */
  firstOrNull(): T | null

  /**
   * Returns the first element matching the given [predicate], or `null` if element was not found.
   */
  firstOrNull(predicate: (value: T) => boolean): T | null
}

export default <T extends any>(proto: Array<T>) => {
  proto.first = function (predicate?: (value: T) => boolean): T {
    if (this.length === 0) {
      throw new Error('NoSuchElementError')
    }
    if (predicate) {
      for (let e of this) {
        if (predicate(e)) {
          return e
        }
      }
      throw new Error('NoSuchElementError')
    }
    return this[0]
  }

  proto.firstOrNull = function (predicate?: (value: T) => boolean): T | null {
    if (predicate) {
      for (let e of this) {
        if (predicate(e)) {
          return e
        }
      }
      return null
    }
    return this[0] ?? null
  }
}
