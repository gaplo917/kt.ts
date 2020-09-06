export function ktFilterNotNull<T>(arr: T[]): Array<NonNullable<T>> {
  return arr.filter(value => value !== null && value !== undefined) as Array<NonNullable<T>>
}
