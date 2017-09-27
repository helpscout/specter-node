import fs from 'fs'
import { warn } from './log'

export const fileExists = (file) => {
  if (!fs.existsSync(file)) {
    warn(`Specter could not find ${file}!`)
    return false
  } else {
    return true
  }
}

export const getSpecsFromFile = (file) => {
  if (!fileExists(file)) return false

  const specs = fs.readFileSync(file, 'utf-8')

  if (!specs) return false

  return JSON.parse(specs)
}
