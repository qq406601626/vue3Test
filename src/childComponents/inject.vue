<template>

</template>

<script lang="ts">
import {defineComponent,inject} from "vue";

export default defineComponent({
  name:'inject',
  setup(){
    const user = inject('user')
  }
})
</script>

