
export function arrayGet<T>(i: number, array: ReadonlyArray<T>): T | undefined {
  return array[i];
}

export function arrayFirst<T>(array: ReadonlyArray<T>): T | undefined {
  return arrayGet(0, array);
}

export function arrayLast<T>(array: ReadonlyArray<T>): T | undefined {
  return arrayGet(array.length - 1, array);
}

export function arrayImSet<T>(i: number, x: T, array: ReadonlyArray<T>): T[] {
  const res = [...array];
  res[i] = x;
  return res;
}

export function arrayTake<T>(n: number, array: ReadonlyArray<T>): T[] {
  return array.slice(0, n);
}

export function arrayDrop<T>(n: number, array: ReadonlyArray<T>): T[] {
  return array.slice(n);
}