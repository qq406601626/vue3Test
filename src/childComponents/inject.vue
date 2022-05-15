<template>
<div>name:{{name}}</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name:'inject',
  props:{
    name:Object
  },
  setup(props){
  }
})
</script>

