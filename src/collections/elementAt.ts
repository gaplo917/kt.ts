declare global {
  interface Array<T> extends KtListElementAtOp<T> {}
}

export interface KtListElementAtOp<T> {
  elementAt(index: number): T

  elementAtOrElse(index: number, defaultValue: (index: number) => T): T

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
