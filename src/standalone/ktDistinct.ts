import { ktDistinctBy } from './ktDistinctBy'

export function ktDistinct<T>(arr: T[]): T[] {
  return ktDistinctBy<T, T>(arr)
}
