export function ktFirstOrNull<T>(arr: T[], predicate?: (value: T) => boolean): T | null {
  if (predicate) {
    for (const e of arr) {
      if (predicate(e)) {
        return e
      }
    }
    return null
  }
  return arr[0] ?? null
}
