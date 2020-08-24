```ts
declare global {
  interface Array<T> extends KtListXXXOp<T> {}
}

export interface KtListXXXOp<T> {
}

export default <T extends any>(proto: Array<T>) => {

}
```


```ts
import inject from './XXX'

describe('XXX', () => {
  inject(Array.prototype)

  test('YYY', () => {
    expect([1, 2, 3].YYY()).toStrictEqual([1, 2, 3])
  })
})
```
