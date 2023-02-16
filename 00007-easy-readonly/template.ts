type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}

// js逻辑
function myReadonly(todo) {
  const obj = {}
  for (const key in todo) {
    obj['readonly' + key] = todo[key]
  }
  return obj
}

// 1.返回一个对象
// 2.遍历todo对象拿到 属性名 in -> mapped keyof -> lookup
// 3.取值 为属性名前加上readonly关键字
// 4.赋原属性值 indexd
