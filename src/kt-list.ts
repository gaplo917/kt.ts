import injectDistinct, { KtListDistinctOp } from './collections/distinct'
import injectFilter, { KtListFilterOp } from './collections/filter'
import injectForEach, { KtListForEachOp } from './collections/forEach'
import injectSize, { KtListSizeOp } from './collections/size'
import injectContains, { KtListContainsOp } from './collections/contains'
import injectElementAt, { KtListElementAtOp } from './collections/elementAt'
import injectFind, { KtListFindOp } from './collections/find'

declare global {
  interface Array<T> extends KtListOp<T>, TsListOp<T> {}
}

interface Pair<K, V> {
  // TODO
  todo: K | V
}

interface Comparator<R> {
  // TODO
  todo: R
}

interface IndexedValue<R> {
  // TODO
  todo: R
}

export interface KtListOp<T>
  extends KtListDistinctOp<T>,
    KtListFilterOp<T>,
    KtListForEachOp<T>,
    KtListSizeOp,
    KtListContainsOp<T>,
    KtListElementAtOp<T>,
    KtListFindOp<T> {
  first(): T

  first(predicate: (value: T) => boolean): T

  firstOrNull(): T | null

  getOrElse(index: number, defaultValue: (index: number) => T): T

  getOrNull(index: number): T | null

  indexOf(element: T): number

  indexOfFirst(predicate: (value: T) => boolean): number

  indexOfLast(predicate: (value: T) => boolean): number

  last(): T

  last(predicate: (value: T) => boolean): T

  lastIndexOf(element: T): number

  lastOrNull(): T | null

  random(): T

  single(): T

  single(predicate: (value: T) => boolean): T

  singleOrNull(): T | null

  singleOrNull(predicate: (value: T) => boolean): T | null

  drop(n: number): T[]

  dropLast(n: number): T[]

  dropLastWhile(predicate: (value: T) => boolean): T[]

  dropWhile(predicate: (value: T) => boolean): T[]

  slice(indices: number[] /*IntRange*/): T[]

  take(n: number): T[]

  takeLast(n: number): T[]

  takeLastWhile(predicate: (value: T) => boolean): T[]

  takeWhile(predicate: (value: T) => boolean): T[]

  reverse(): void

  reversed(): T[]

  sortBy<R>(selector: (value: T) => R | null): void

  sortByDescending<R>(selector: (value: T) => R | null): void

  sortDescending(): void

  sorted(): T[]

  sortedBy<R>(selector: (value: T) => R | null): T[]

  sortedByDescending<R>(selector: (value: T) => R | null): T[]

  sortedDescending(): T[]

  sortedWith(comparator: Comparator<T>): T[]

  associate<K, V>(transform: (value: T) => Pair<K, V>): Map<K, V>

  associateBy<K>(keySelector: (value: T) => K): Map<K, T>

  associateBy<K, V>(keySelector: (value: T) => K, valueTransform: (value: T) => V): Map<K, V>

  associateWith<K, V>(valueSelector: (key: K) => V): Map<K, V>

  toSet(): Set<T>

  groupBy<K, V>(keySelector: (value: T) => K): Map<K, T[]>

  groupBy<K, V>(keySelector: (value: T) => K, valueTransform: (value: T) => V): Map<K, V[]>

  mapIndexed<R>(transform: (index: number, value: T) => R): R[]

  mapIndexedNotNull<R>(transform: (index: number, value: T) => R | null): R[]

  mapNotNull<R>(transform: (value: T) => R | null): R[]

  withIndex(): Iterable<IndexedValue<T>>

  intersect(other: Iterable<T>): Set<T>

  subtract(other: Iterable<T>): Set<T>

  union(other: Iterable<T>): Set<T>

  all(predicate: (value: T) => boolean): boolean

  any(): boolean

  any(predicate: (value: T) => boolean): boolean

  count(): number

  count(predicate: (value: T) => boolean): number

  fold<R>(initial: R, operation: (acc: R, value: T) => R): R

  foldIndexed<R>(initial: R, operation: (index: number, acc: R, value: T) => R): R

  foldRight<R>(initial: R, operation: (value: T, acc: R) => R): R

  foldRightIndexed<R>(initial: R, operation: (index: number, value: T, acc: R) => R): R

  forEach(action: (value: T) => void): void

  forEachIndexed(action: (value: T, index: number) => void): void

  max(): number | null

  maxBy<R>(selector: (value: T) => R): T | null

  maxWith(comparator: Comparator<T>): T | null

  min(): number | null

  minBy<R>(selector: (value: T) => R): T | null

  minWith(comparator: Comparator<T>): T | null

  none(): boolean

  none(predicate: (value: T) => boolean): boolean

  onEach<C>(action: (value: T) => void): C

  reduce<S>(operation: (acc: S, value: T) => S): S

  reduceIndexed<S>(operation: (index: number, acc: S, value: T) => S): S

  reduceRight<S>(operation: (value: T, acc: S) => S): S

  reduceRightIndexed<S>(operation: (index: number, value: T, acc: S) => S): S

  sumBy(selector: (value: T) => number): number

  requireNoNulls(): Iterable<T>

  requireNoNulls(): T[]

  chunked(size: number): Array<T[]>

  chunked<R>(size: number, transform: (value: T[]) => R): R[]

  minus(element: T): T[]

  minus(elements: Array<T>): T[]

  minusElement(element: T): T[]

  partition(predicate: (value: T) => boolean): Pair<T[], T[]>

  plus(element: T): T[]

  plus(elements: Array<T>): T[]

  plusElement(element: T): T[]

  windowed(size: number, step: number, partialWindows: boolean): Array<T[]>

  windowed<R>(
    size: number,
    step: number,
    partialWindows: boolean,
    transform: (value: T[]) => R,
  ): R[]

  zip<R, V>(other: Array<R>): Array<Pair<T, R>>

  zip<R, V>(other: Array<R>, transform: (a: T, b: R) => V): V[]

  zip<R>(other: Iterable<R>): Array<Pair<T, R>>

  zip<R, V>(other: Iterable<R>, transform: (a: T, b: R) => V): V[]

  zipWithNext(): Array<Pair<T, T>>

  zipWithNext<R>(transform: (a: T, b: T) => R): R[]

  joinTo<A>(
    buffer: A,
    separator: string,
    prefix: string,
    postfix: string,
    limit: number,
    truncated: string,
    transform?: (value: T) => string,
  ): A

  joinToString(
    separator: string,
    prefix: string,
    postfix: string,
    limit: number,
    truncated: string,
    transform?: (value: T) => string,
  ): string

  average(): number

  sum(): number

  /**
   * Returns the element at the specified index in the list.
   * @param index
   */
  get(index: number): T

  isEmpty(): boolean

  iterator(): Iterator<T>

  subList(fromIndex: number, toIndex: number): T[]

  lastIndex: number
}

interface TsListOp<T> {
  filterNotEmpty(): Array<NonNullable<T>>
}

export function arrayOf<T = any>(...items: T[]): Array<T> {
  return items
}

;(() => {
  injectDistinct(Array.prototype)
  injectFilter(Array.prototype)
  injectForEach(Array.prototype)
  injectSize(Array.prototype)
  injectContains(Array.prototype)
  injectElementAt(Array.prototype)
  injectFind(Array.prototype)
})()
