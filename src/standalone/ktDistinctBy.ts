import hash from 'object-hash'

export function ktDistinctBy<T, K>(arr: T[], selector?: (value: T) => K): T[] {
  const map = new Map<string, T>()
  for (const e of arr) {
    const applied = selector?.(e) ?? e
    const hashKey = hash(applied)
    // TODO: detect primitive type and no need to apply hash
    if (!map.has(hashKey)) {
      map.set(hashKey, e)
    }
  }
  return Array.from(map.values())
}
