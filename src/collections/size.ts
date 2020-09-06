declare global {
  interface Array<T> extends KtListSizeOp {}
}

export interface KtListSizeOp {
  /**
   * Returns the size of the collection.
   */
  ktSize: number
}

export default <T extends any>(proto: Array<T>) => {
  Object.defineProperty(proto, 'ktSize', {
    get: function () {
      return this.length
    },
  })
}
