/**
 * Checks if all elements in the specified collection are contained in this collection.
 * This function use deep-equal(recursive equality algorithm) instead of SameValueZero
 */
import { ktContains } from './ktContains'

export function ktContainsAll<T>(arr: T[], elements: T[]): boolean {
  return elements.every(e => ktContains(arr, e))
}
