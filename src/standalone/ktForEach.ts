export function ktForEach<T>(arr: T[], action: (value: T) => void): void {
  arr.forEach(value => action(value))
}
