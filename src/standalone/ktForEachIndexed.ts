export function ktForEachIndexed<T>(arr: T[], action: (index: number, value: T) => void): void {
  arr.forEach((value, index) => action(index, value))
}
