export class Pipe<T>{
  constructor(public readonly value: T) {
  }

  chain<P>(f: (x: T) => P): Pipe<P> {
    return new Pipe(f(this.value));
  }
}

export function pipe<T>(x: T): Pipe<T> {
  return new Pipe(x);
}