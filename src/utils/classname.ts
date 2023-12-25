import classnames from 'classnames'
type CSSModule = Record<string, string>;

export const getDirectionClass = (c: string) => `${c} ${c}-${ 'ltr'}`

/**
 * create a new className generate function, add namespace, handle css module
 * @param style - object; for css module
 * @param module - string
 * @param prefix - string, default value is 'shineout'
 * * */
export default (style: CSSModule, module: string, prefix: string = 'so') => (...args: any) => {
  const className = classnames(...args)
  if (!className) return ''

  const ns = `${prefix}${module ? `-${module}` : '-'}`
  const list: (string | number)[] = className.split(' ').map(c => (c === '_' ? ns : `${ns}-${c}`))
  return list.join(' ')
}
