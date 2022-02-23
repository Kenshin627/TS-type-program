/**内置类型 */
//1. Exclude
type _Exclude<T, U> = T extends U? never : T;

//2. Extract
type _Extract<T, U> = T extends U? T: never;

//3. Required
type _Required<T extends Object> = { [ key in keyof T ]-? : T[key] };

//4. Partial
type toPartial<T extends Object> = { [ key in keyof T]? : T[key] };
type toDeepPartial<T extends Object> = { [ key in keyof T]? : T[key] extends Object ? toDeepPartial<T[key]> : T[key] };

//5. Pick
type _Pick<T extends Object, K extends keyof T> = { [key in K] : T[key] };

//6. Omit (Exclude + Pick)
type _Omit<T extends Object, U> = _Pick<T, _Exclude<keyof T, U>>;

//7. Record
type _Record<T extends keyof any, U> = { [ key in T ] : U };

//8. Compute(合并交叉类型)
type Compute<T> = T extends Function? T : { [key in keyof T] : T[key] };

//9. Merge
type Merge<T extends Object, U extends Object> = Compute<T & _Omit<U, keyof T>>;

//10. Intersection
type Intersection<T extends Object, U extends Object> = _Pick<T, _Extract<keyof T, keyof U>>;

//11. Overwrite
type OverWrite<T, U> =  { [ key in keyof T ]: key extends keyof U? U[key] : T[key] };

//12. UnionToIntersection(联合转交叉)
type UnionToIntersection<U> = (U extends any ? (x: U) => void : never) extends (x: infer R) => void ? R : never

type t333 = UnionToIntersection<{name: string} | {age: number}>;