export function ktFilter<T>(arr: T[], predicate: (value: T) => boolean): T[] {
  return arr.filter(e => predicate(e))
}
