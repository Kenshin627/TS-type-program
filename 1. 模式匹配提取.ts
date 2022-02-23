/**Array */
type First<T extends unknown[]> = T extends [infer F, ...unknown[]] ? F : never;
type Last<T extends unknown[]> = T extends [...unknown[], infer L] ? L : never;
type Pop<T extends unknown[]> = T extends []? [] : T extends [...infer Rest, unknown] ? Rest: never;
type Shift<T extends unknown[]> = T extends []? [] : T extends [unknown, ...infer Rest] ? Rest : never;

/**String */
type StartsWith<S extends string, PREFIX extends string> = S extends `${PREFIX}${string}` ? true : false;
type EndsWith<S extends string, SUFFIX extends string> = S extends `${string}${SUFFIX}` ? true : false;
type Replace<S extends string, From extends string, to extends string> = S extends `${infer prefix}${From}${infer suffix}` ? `${prefix}${to}${suffix}` : S;
type TrimLeft<S extends string> = S extends `${' ' | '\t' | '\n'}${infer Rest}` ? TrimLeft<Rest> : S;
type TrimRight<S extends string> = S extends `${infer Rest}${' ' | '\t' | '\n'}` ? TrimRight<Rest> : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;

/**Function */
type GetParameter<Func extends Function> = Func extends (...args: infer R) => unknown ? R : never;
type GetReturnType<Func extends Function> = Func extends (...args: unknown[]) => infer R ? R : unknown;
