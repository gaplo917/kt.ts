export function ktFilterIndexed<T>(arr: T[], predicate: (index: number, value: T) => boolean): T[] {
  return arr.filter((e, index) => predicate(index, e))
}
