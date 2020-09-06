export function ktElementAtOrNull<T>(arr: T[], index: number): T | null {
  return arr[index] ?? null
}
