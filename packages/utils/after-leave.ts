import { ComponentPublicInstance } from 'vue'
import { set } from 'lodash-es'

export default function (instance: ComponentPublicInstance, callback: (...args: unknown[]) => unknown, speed = 300): void {
  if (!instance || !callback) {
    throw new Error('instance & callback is required')
  }
  let called = false
  const afterLeaveCallback = function (...args: unknown[]) {
    if (called) {
      return
    }
    called = true
    if (callback) {
      callback(args)
    }
  }
  setTimeout(() => {
    afterLeaveCallback()
  }, speed + 100)
}
