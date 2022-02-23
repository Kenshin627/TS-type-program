/**数组长度实现加减乘除 */
/**add */
type Add<num1 extends number, num2 extends number> = [...BuildArray<num1>, ...BuildArray<num2>]['length'];
type substract<num1 extends number, num2 extends number> = 
 BuildArray<num1> extends [...BuildArray<num2>, ...infer rest1] ? 
    rest1["length"]: 
    BuildArray<num2> extends [...BuildArray<num1>, ...infer rest2] ? 
    rest2["length"] : never;

type strLen<S extends string, counter extends unknown[] = []> = S extends `${string}${infer rest}` ?  strLen<rest, [...counter, unknown]>: counter["length"];
