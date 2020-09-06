export function ktElementAtOrElse<T>(
  arr: T[],
  index: number,
  defaultValue: (index: number) => T,
): T {
  return arr[index] ?? defaultValue(index)
}
