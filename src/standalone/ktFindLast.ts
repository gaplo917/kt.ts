export function ktFindLast<T>(arr: T[], predicate: (value: T) => boolean): T | null {
  const len = arr.length
  for (let i = len - 1; i >= 0; i--) {
    const v = arr[i]
    if (predicate(v)) {
      return v
    }
  }
  return null
}
