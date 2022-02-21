<template>
  <div>button</div>
</template>

<script lang="ts" setup>
import { buttonEmits, buttonProps } from './buttonType'
const props = defineProps(buttonProps)
</script>
<script lang="ts">
export default {
  name: 'ElButton'
}
</script>
