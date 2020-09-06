import deepEqual from 'deep-equal'

/**
 * Checks if the specified element is contained in this collection.
 * This function use deep-equal(recursive equality algorithm) instead of SameValueZero
 */
export function ktContains<T>(arr: T[], element: T): boolean {
  for (const e of arr) {
    if (deepEqual(e, element)) {
      return true
    }
  }
  return false
}
