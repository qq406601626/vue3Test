<template>
  <div id="app">
    <!--<router-view />-->
    <!--<inject :name="name"></inject>-->
    a:{{a}}
    <div @click="b">change</div>
  </div>
</template>

<script>
import inject from './childComponents/inject.vue'
import {ref, reactive, readonly, isReactive, markRaw, shallowReactive, unref, isRef, shallowRef, toRef,toRaw} from 'vue'

export default {
  name: 'App',
  components: {inject},
  setup() {
    const a = shallowReactive({
      name:'zhangsan',
      user:{
        age:18
      }
    })
    const b = ()=>{
      a.user={age:20}
    }
    return {
      a,
      b
    }
  }
}
</script>
