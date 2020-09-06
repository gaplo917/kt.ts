import { ktFirstOrNull } from './ktFirstOrNull'

export function ktFirst<T>(arr: T[], predicate?: (value: T) => boolean): T {
  const result = ktFirstOrNull(arr, predicate)
  if (result === null) {
    throw new Error('NoSuchElementError')
  }
  return result
}
