import isServer from "./isServer";
import {isObject, castArray, isEmpty, isEqual, capitalize} from 'lodash-es'

const {hasOwnProperty} = Object.prototype
type Any = Record<string, unknown> | unknown

export function hasOwn(obj: Any, key: string): boolean {
    return hasOwnProperty.call(obj, key)
}

function extend<T, K>(to: T, _from: K): T & K {
    return Object.assign(to, _from)
}

export function toObject<T>(arr: Array<T>): Record<string, T> {
    const res = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i])
        }
    }
    return res
}

export const getValueByPath = (obj: Any, paths = ''): unknown => {
    let ret: unknown = obj
    paths.split('.').map(path => {
        ret = ret?.[path]
    })
    return ret
}

export function getPropByPath(obj: Any, path: string, strict: boolean):{
    o:unknown,
    k:string,
    v:Nullable<unknown>
} {
    let tempObj: unknown = obj
    path = path.replace(/\[(\w+)\]/g, '.$1')
    path = path.replace(/^\./, '')
    const keyArr = path.split('.')
    let i = 0
    for (i; i < keyArr.length - 1; i++) {
        if (!tempObj && !strict) break
        const key = keyArr[i]
        tempObj = tempObj?.[key]
        if (!tempObj && strict) {
            throw new Error('please transfer a valid prop path to form item!')
        }
    }
    return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj?.[keyArr[i]],
    }
}

