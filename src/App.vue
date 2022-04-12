<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/button">Button</router-link> |
      <router-link to="/badge">Badge</router-link> |
      <router-link to="/tag">Tag</router-link>
    </div>
  </div>
</template>

<script>
import {DirectiveBinding, VNode} from 'vue'
console.log(DirectiveBinding)
// import {DirectiveBinding, VNode} from 'vue'
export default {
  name: 'App',
}
</script>
