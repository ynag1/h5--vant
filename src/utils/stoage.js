export const KEY = 'YOUMED-KEY'

// localStorage.getItem(获取
export const getKey = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

// localStorage.setItem存储
export const setKey = (key, item) => {
  console.log(key, item)
  localStorage.setItem(key, JSON.stringify(item))
}
// localStorage.removeItem删除
export const delKey = (key) => {
  localStorage.removeItem(key)
}
