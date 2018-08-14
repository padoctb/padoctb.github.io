import {OrderedMap} from 'immutable'

export default (arr, record) => {
  return arr.reduce((prev, current) => {
    return prev.set(current.id, new record(current))
  }, new OrderedMap({}))
}