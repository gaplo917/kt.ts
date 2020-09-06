export function ktElementAt<T>(arr: T[], index: number): T {
  if (arr.length === 0 || index >= arr.length) {
    throw new Error('IndexOutOfBoundError')
  }
  return arr[index]
}
