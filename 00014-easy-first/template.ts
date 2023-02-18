// js 语句
function first(array) {
  // arr 是不是一个空数组，如果是的话 那么返回never
  const [first, ...rest] = array
  return first ? first : 'never'
  // if (array.length === 0) {
  //   return 'never'
  // }
  // return array[0]
}

// 知识点
// 1.extends 类型条件判断
// type First<T extends any[]> = T extends [] ? never : T[0]

// 2.获取tuple 的length属性 indexed
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 3.extends union 判断的规则

// T[number]
type ages = [1, 2, 3]
// union
type t1 = ages[number]

// 看看某个值是不是在union 里面
type t2 = 1 extends ages[number] ? 'true' : 'false'
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 4.inter 的使用 (推断)
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
