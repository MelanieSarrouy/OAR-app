export function normalizeAndLowerCase(param) {
  let a = param.normalize('NFD')
  a = replacements(a)
  let b = a.toLowerCase()
  return b
}
function replacements(str) {
  let a = str.replace(/[\u0300-\u036f]/g, '')
  let b = a.replace(/[œ]/g, 'oe')
  let c = b.replace(/[ÈÉÊË]/g, 'E')
  return c
}
