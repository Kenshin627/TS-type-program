/**Promise */
type DeepPromiseValueType<T extends Promise<unknown>> = T extends Promise<infer ValueType> ? ValueType extends Promise<unknown> ? DeepPromiseValueType<ValueType>: ValueType :never; 

type t1 = Promise<Promise<Promise<string>>>;
type t2 = DeepPromiseValueType<Promise<string>>

/**Array */
type ReverseArr<T extends unknown[]> = T extends [infer First,...infer Rest] ? [...ReverseArr<Rest>, First] : T;
type Includes<T extends unknown[], find> = T extends [infer F, ...infer Rest] ? find extends F? true: Includes<Rest, find>: false ;
type RemoveItem<T extends unknown[], find> = T extends [infer F, ...infer Rest] ? find extends F? [...Rest]: RemoveItem<Rest, find> : T;
type BuildArray<length extends number, ele = unknown, Arr extends unknown[] = []> = Arr['length'] extends length ? Arr : BuildArray<length, ele, [...Arr, ele]>;

/**String */
type ReplaceAll<S extends string, from extends string, to extends string> =  S extends `${infer prefix}${from}${infer suffix}` ? `${prefix}${to}${ReplaceAll<`${suffix}`, from, to>}`: S;

type StringToUnion<S extends string> = S extends `${infer prefix}${infer rest}` ? prefix | StringToUnion<rest> : never;

type ReverseStr<S extends string> = S extends `${infer prefix}${infer rest}` ? `${ReverseStr<rest>}${prefix}` : S;


/**Indexed obj */
type DeepReadonly<obj extends Object> = 
{ 
    readonly [key in keyof obj] : obj[key] extends Object? obj[key] extends Function? obj[key]: DeepReadonly<obj[key]> : obj[key] 
};
type t3 = {
    k1: {
        k2: number;
        k3: string;
    }
    k4: boolean;
    k5: {
        k6: {
            k7: number;
            k8: number;
        }
    }
}

type t4 = DeepReadonly<t3>["k5"]["k6"];
