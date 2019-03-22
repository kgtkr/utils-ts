export type Nullish = null | undefined;

export function isNullish(x: any): x is null | undefined {
  return x === null || x === undefined;
}

export function nullToUndefined<T>(x: T | null): T | undefined {
  return x === null ? undefined : x;
}

export function undefinedToNull<T>(x: T | undefined): T | null {
  return x === undefined ? null : x;
}

export function mapNull<T, P>(f: (x: T) => P, x: T | null): P | null {
  return x !== null ? f(x) : null;
}

export function mapUndefined<T, P>(f: (x: T) => P, x: T | undefined): P | undefined {
  return x !== undefined ? f(x) : undefined;
}

export function mapNullish<T, P>(f: (x: T) => P, x: T | Nullish): P | Nullish {
  return !isNullish(x) ? f(x) : x;
}

export function unwrapNull<T>(x: T | null): T {
  if (x !== null) {
    return x;
  } else {
    throw new Error();
  }
}

export function unwrapUndefined<T>(x: T | undefined): T {
  if (x !== undefined) {
    return x;
  } else {
    throw new Error();
  }
}

export function unwrapNullish<T>(x: T | Nullish): T {
  if (!isNullish(x)) {
    return x;
  } else {
    throw new Error();
  }
}