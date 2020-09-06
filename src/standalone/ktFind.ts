export function ktFind<T>(arr: T[], predicate: (value: T) => boolean): T | null {
  return arr.find(value => predicate(value)) ?? null
}
