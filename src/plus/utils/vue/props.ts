import {warn} from 'vue'
import {fromPairs} from 'lodash'
import {isObject} from '../types'
import {hasOwn} from '../objects'
import type { ExtractPropTypes, PropType } from 'vue'

export const propKey = '__elPropsReservedKey'
