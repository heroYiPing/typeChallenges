type Length<T extends readonly any[]> = T['length']

// js思路
const toLength = (array) => {
  if (array instanceof Array) {
    return array.length
  }
}
