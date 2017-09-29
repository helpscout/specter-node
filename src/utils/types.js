const getType = o => typeof o

/**
 * Determines whether a value matches the Faker type
 *
 * @param any             $value    The value to type check
 * @param string/array    $type     The valid type(s) to check against
 *
 * @return boolean
 */
export const isCorrectType = (value, type) => {
  if (getType(type) !== 'string' && !Array.isArray(type)) return false

  if (!Array.isArray(type)) {
    return getType(value) === type
  }

  return type
    .map(t => getType(value) === t)
    .filter(result => result).length > 0
}
