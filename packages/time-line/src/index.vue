<script lang="ts">
import { h, provide, defineComponent } from 'vue'

export default defineComponent({
  name: 'ElTimeLine',
  setup(props, ctx) {
    provide('timeline',ctx)
    return ()={
      return h()
    }
  }
})
</script>

