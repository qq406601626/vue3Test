import isServer from './isServer'

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A_Z])/

/* istanbul ignore next */
const trim = function (s: string) {
  return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF+]$/g, '')
}

/* istanbul ignore next */
const camelCase = function (name: string) {
  return name
    .replace(SPECIAL_CHARS_REGEXP, function (_, __, letter, offset) {
      return offset ? letter.toUpperCase() : letter
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1')
}

/* istanbul ignore next */
export const on = (function () {
  if (!isServer) {
    return function (
      element: HTMLElement | Document,
      event: string,
      handler: EventListenerOrEventListenerObject,
    ) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  }
})()
