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

export function nullMap<T, P>(f: (x: T) => P, x: T | null): P | null {
  return x !== null ? f(x) : null;
}

export function undefinedMap<T, P>(f: (x: T) => P, x: T | undefined): P | undefined {
  return x !== undefined ? f(x) : undefined;
}

export function nullishMap<T, P>(f: (x: T) => P, x: T | Nullish): P | Nullish {
  return !isNullish(x) ? f(x) : x;
}

export function nullFilter<T>(f: (x: T) => boolean, x: T | null): T | null {
  if (x !== null) {
    if (f(x)) {
      return x;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function undefinedFilter<T>(f: (x: T) => boolean, x: T | undefined): T | undefined {
  if (x !== undefined) {
    if (f(x)) {
      return x;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

export function nullUnwrap<T>(x: T | null): T {
  if (x !== null) {
    return x;
  } else {
    throw new Error();
  }
}

export function undefinedUnwrap<T>(x: T | undefined): T {
  if (x !== undefined) {
    return x;
  } else {
    throw new Error();
  }
}

export function nullishUnwrap<T>(x: T | Nullish): T {
  if (!isNullish(x)) {
    return x;
  } else {
    throw new Error();
  }
}

export function nullUnwrapOr<T>(def: T, x: T | null): T {
  return x !== null ? x : def;
}

export function undefinedUnwrapOr<T>(def: T, x: T | undefined): T {
  return x !== undefined ? x : def;
}

export function nullishUnwrapOr<T>(def: T, x: T | Nullish): T {
  return !isNullish(x) ? x : def;
}

export function nullUnwrapOrElse<T>(f: () => T, x: T | null): T {
  return x !== null ? x : f();
}

export function undefinedUnwrapOrElse<T>(f: () => T, x: T | undefined): T {
  return x !== undefined ? x : f();
}

export function nullishUnwrapOrElse<T>(f: () => T, x: T | Nullish): T {
  return !isNullish(x) ? x : f();
}