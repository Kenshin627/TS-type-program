/**Array */
type push<T extends unknown[], S> = [...T, S];
type unShift<T extends unknown[], S> = [S, ...T];
type zip<T extends unknown[], S extends unknown[]> = T extends [infer s1, ...infer Rest1] ? S extends [infer s2,...infer Rest2] ? [[s1, s2],...zip<Rest1, Rest2>] : [] : [];

/**String */
type CapitalizeStr<S extends string> = S extends `${infer F}${infer Rest}`? `${Uppercase<F>}${Rest}` : S;
type CamelCase = null;
type DropSubStr<S extends string, subStr extends string> = S extends `${infer prefix}${subStr}${infer suffix}`? DropSubStr<`${prefix}${suffix}`, subStr> : S;

/**Function */
type AppendArgument<Func extends Function, Arg> = Func extends (...args: infer Args) => infer ReturnType ? (...args: [...Args, Arg]) => ReturnType : never;


/**Indexed */
type mappingValue<obj extends Object> = { [key in keyof obj] : [obj[key], obj[key], obj[key]] };
type UppercaseKey<obj extends Object> = { [key in keyof obj as Uppercase<key & string>] : obj[key] };
type Records<K extends string | number | symbol, T> = { [key in K]: T };
type ToReadonly<obj extends Object> = { readonly [key in keyof obj]: obj[key] };
type ToPartial<obj extends Object> = { [key in keyof obj]?: obj[key] };
type ToMutable<obj extends Object> = { -readonly [key in keyof obj] : obj[key] };
type ToRequired<obj extends object> = { [key in keyof obj]-? : obj[key] };
type FilterByValueType<obj extends Object, objValueType> = { [key in keyof obj as obj[key] extends objValueType ? key: never ]: obj[key] };
