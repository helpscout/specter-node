/**
 * Higher order functional wrapper for the other log methods
 *
 * @param function  $fn         Console.log method
 * @param string    $message    Message to log
 *
 * @returns function
 */

const logWrapper = fn => /* istanbul ignore next */ message => {
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'test') {
    return fn(message)
  }
}

/* istanbul ignore next */
export const log = message => {
  /* istanbul ignore next */
  return logWrapper(console.log, message)
}

/* istanbul ignore next */
export const warn = message => {
  /* istanbul ignore next */
  return logWrapper(console.warn, message)
}

/* istanbul ignore next */
export const error = message => {
  /* istanbul ignore next */
  return logWrapper(console.error, message)
}
