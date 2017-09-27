const logWrapper = fn => message => {
  if (process.env.NODE_ENV !== 'test') {
    return fn(message)
  }
}

export const log = message => {
  return logWrapper(console.log, message)
}

export const warn = message => {
  return logWrapper(console.warn, message)
}

export const error = message => {
  return logWrapper(console.error, message)
}
