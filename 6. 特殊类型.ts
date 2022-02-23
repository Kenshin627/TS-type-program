//1. isAny
type isAny<T> = 1 extends (2 & T) ? true : false;

//2. isEqual && notEqual
type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? true : false;

type notEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? false : true;
//3. isUnion
type isUnion<T, U = T> = T extends T? [U] extends [T]? false: true: never;

//4. isNever
type isNever<T> =  [T] extends [never]? true: false;

//5. isTuple
type isTuple<T> = T extends readonly [...arg: infer Eles] ? notEqual<Eles['length'], number> : false;

//6. getOptional
type getOptional<T extends Object> = { [ key in keyof T as {} extends Pick<T, key> ? key: never ] : T[key] };

//7. getRequired
type getRequired<T extends Object> = { [ key in keyof T as {} extends Pick<T, key> ? never: key] : T[key] };

//8. RemoveIndexSignature
type removeIndexSignature<T extends Record<string, any>> = { [ key in keyof T  as key extends `${infer Str}`? Str: never ]: T[key] };

//9. classPublicProps
type classPublicProps<T extends Record<string, any>> = { [ key in keyof T ]: T[key] };