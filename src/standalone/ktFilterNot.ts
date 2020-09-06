export function ktFilterNot<T>(arr: T[], predicate: (value: T) => boolean): T[] {
  return arr.filter(e => !predicate(e))
}
