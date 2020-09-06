export function ktFilterNotEmpty<T extends string>(arr: T[]): Array<NonNullable<T>> {
  return arr.filter(value => value !== null && value !== undefined && value !== '') as Array<
    NonNullable<T>
  >
}
