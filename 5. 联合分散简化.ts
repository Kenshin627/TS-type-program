/**
 * 分布式条件类型 
 * 联合类型中的每个类型都是相互独立的，TypeScript 对它做了特殊处理，也就是遇到字符串类型、条件类型的时候会把每个类型单独传入做计算，最后把每个类型的计算结果合并成联合类型
 */
type UpperCaseA<U> = U extends "a" ? Uppercase<U> : U;

//test
type union = 'a' | 'b' | 'c';
type sss = `${union}^^^` // => 'a^^^' | 'b^^^' | 'c^^^'

/**CamelcaseUnion */
type CamelcaseUnion<U extends string> = U extends `${infer prefix}_${infer S}${infer Rest}` ? `${prefix}${Uppercase<S>}${CamelcaseUnion<Rest>}` : U; 

//test
type CamelcaseUnionResult = CamelcaseUnion<"aa_aa_aa" | "bb_bb_bb" | "cc_cc_cc">; // => "aaAaAa" | "bbBbBb" | "ccCcCc"

/**isUnion */
type isUnion<U, K = U> = U extends U? [K] extends [U] ? false : true : never;
