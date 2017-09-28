export const stripVariableToken = (variable) => {
  return variable.replace(/@/g, '')
}
