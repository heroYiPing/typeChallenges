//  ts 联合类型 union

type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}

function myPick(todo, keys) {
  const obj = {}
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  })

  return obj
}

// 1.返回一个对象
// 2.遍历keys mapped
// 3.todo[key]取值 indexd
// 4.判断key在不在todo里面
//  1.lookup
