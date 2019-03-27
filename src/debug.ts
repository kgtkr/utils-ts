export function debugPrint<T>(x: T): T {
  console.log(x);
  return x;
}