type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [Key in T[number]]: Key
}

// keyof array 索引
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type r = TupleToObject<typeof tuple>
// js 逻辑
function tupleToObject(array) {
  const obj = {}
  // 1.array里面的key是不是number string symbol类型 不是的话就报错

  array.forEach((item) => {
    obj[item] = item
  })
  return obj
}

// 1.返回对象
// 2.遍历数组 array T[number]

// 遍历union in

// 遍历interface keyof
