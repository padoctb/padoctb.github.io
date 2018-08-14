import {OrderedMap} from 'immutable'

//сделать объект вида id > value
export default (arr, record) => {
  return arr.reduce((prev, current) => {
    return prev.set(current.id, new record(current))
  }, new OrderedMap({}))
}