/**
 * Higher order functional wrapper for the other log methods
 *
 * @param function  $fn         Console.log method
 * @param string    $message    Message to log
 *
 * @returns function
 */
const logWrapper = fn => message => {
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'test') {
    return fn(message)
  }
}

export const log = message => {
  /* istanbul ignore next */
  return logWrapper(console.log, message)
}

export const warn = message => {
  /* istanbul ignore next */
  return logWrapper(console.warn, message)
}

export const error = message => {
  /* istanbul ignore next */
  return logWrapper(console.error, message)
}
