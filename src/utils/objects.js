import { warn } from './log'

/**
 * Deconstructs a (nested) object into a flattened array based on either
 * key or value data.
 *
 * @param function  $method   Method to call recursively for nested objects
 * @param object    $object   Object to deconstruct
 * @param string    $type     Type of data to return
 *
 * @returns array
 */
export const flattenObject = (method, object, type) => {
  if (typeof object !== 'object') {
    warn('flattenObject(): Argument must be an object')
    return false
  }

  return Object.keys(object).reduce((array, key) => {
    const value = object[key]
    if (typeof value === 'object') {
      method(value).forEach(o => array.push(o))
    } else {
      array.push(type === 'key' ? key : value)
    }

    return array
  }, [])
}

/**
 * Deconstructs a (nested) object into a flattened array based on value.
 *
 * @param object    $object   Object to deconstruct
 *
 * @returns array
 */
export const flattenObjectValuesToArray = object => {
  return flattenObject(flattenObjectValuesToArray, object, 'value')
}

/**
 * Deconstructs a (nested) object into a flattened array based on key.
 *
 * @param object    $object   Object to deconstruct
 *
 * @returns array
 */
export const flattenObjectKeysToArray = object => {
  return flattenObject(flattenObjectKeysToArray, object, 'key')
}
