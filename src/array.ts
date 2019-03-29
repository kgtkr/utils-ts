
export function arrayGet(i: number) {
  return <T>(array: ReadonlyArray<T>): T | undefined => array[i];
}

export const arrayFirst = arrayGet(0);

export function arrayLast<T>(array: ReadonlyArray<T>): T | undefined {
  return arrayGet(array.length - 1)(array);
}

export function arrayImSet<T>(i: number, x: T) {
  return (array: ReadonlyArray<T>): T[] => {
    const res = [...array];
    res[i] = x;
    return res;
  };
}

export function arrayTake(n: number) {
  return <T>(array: ReadonlyArray<T>): T[] => array.slice(0, n);
}

export function arrayDrop(n: number) {
  return <T>(array: ReadonlyArray<T>): T[] => array.slice(n);
}