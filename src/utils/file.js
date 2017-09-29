import fs from 'fs'
import { warn } from './log'

// Fake config file. Real configs should be a in a .specter.yml perhaps
const config = {
  src: './specs',
  dest: './output'
}

/**
 * Provides the full file path of the spec file from config
 *
 * @param   $spec   Name of spec file
 *
 * @returns string
 */
export const getSpecFilePath = spec => {
  return `${config.src}/${spec}.json`
}

/**
 * Checks if the spec file exists
 *
 * @param string   $file   File path of spec file
 *
 * @warns if spec file doesn't exist
 * @returns boolean
 */
export const fileExists = file => {
  if (!fs.existsSync(file)) {
    warn(`Specter could not find ${file}!`)
    return false
  } else {
    return true
  }
}

/**
 * Returns the JSON specs from a spec file
 *
 * @param string   $spec   Name of the spec file
 *
 * @warns if spec file doesn't exist
 * @returns object
 */
export const getSpecsFromFile = (spec) => {
  const file = getSpecFilePath(spec)
  if (!fileExists(file)) {
    warn(`Specter: Could not find ${spec}.json under ${config.src}`)
    return false
  }

  return JSON.parse(fs.readFileSync(file, 'utf-8'))
}
