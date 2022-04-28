const Utils = {
  IgnoreUtilFocusChanges: false,
  focusFirstDescendant: function (element: HTMLElement): boolean {
    for (let i = 0; i < element.childNodes.length; i++) {
      const child = element.childNodes[i]
      if (attemptFocus(child as HTMLElement) || this.focusFirstDescendant(child)) {
        return true
      }
    }
    return false
  },
  focusLastDescendant(element: HTMLElement): boolean {
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
      const child = element.childNodes[i]
      if (
        attemptFocus(child as HTMLElement) ||
                this.focusLastDescendant(child)
      ) {
        return true
      }
    }
    return false
  },
}
const isFocusable = (element: HTMLElement): boolean => {
  if (element.tabIndex > 0 || (element.tabIndex === 0 && element.getAttribute('tabIndex') !== null)) {
    return true
  }
  if ((element as HTMLButtonElement).disabled) {
    return false
  }
  switch (element.nodeName) {
    case 'A': {
      // casting current element to Specific HTMLElement in order to be more type precise
      return !!(element as HTMLAnchorElement).href && (element as HTMLAnchorElement).rel !== 'ignore'
    }
    case 'INPUT': {
      return (element as HTMLInputElement).type !== 'hidden' && (element as HTMLInputElement).type !== 'file'
    }
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA': {
      return true
    }
    default: {
      return false
    }
  }
}
const attemptFocus = (element: HTMLElement): boolean => {
  if (!isFocusable(element)) {
    return false
  }
  Utils.IgnoreUtilFocusChanges = true
  element.focus && element.focus()
  Utils.IgnoreUtilFocusChanges = false
  return document.activeElement === element
}
const triggerEvent = function (elm: HTMLElement, name: string, ...opts: Array<boolean>): HTMLElement {
  let eventName: string
  if (name.includes('mouse') || name.includes('click')) {
    eventName = 'MouseEvents'
  } else if (name.includes('key')) {
    eventName = 'KeyboardEvent'
  } else {
    eventName = 'HTMLEvents'
  }
  const evt = document.createEvent(eventName)
  evt.initEvent(name, ...opts)
  elm.dispatchEvent(evt)
  return elm
}
const eventKeys = {
  tab: 9,
  enter: 13,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  esc: 27,
}
export default Utils
export {
  eventKeys,
  triggerEvent,
}
