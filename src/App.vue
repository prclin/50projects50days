<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
function to(key){
  router.push(key)
}
</script>

<template>
    <a-layout>
      <a-layout-sider width="100" style="height: 100vh;" >
        <a-menu @menu-item-click="to">
          <a-menu-item key="/expanding-cards">ExpandingCards</a-menu-item>
        </a-menu>
      </a-layout-sider >
      <a-layout-content style="display:flex;justify-content: center;align-items: center;">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  box-sizing: border-box;
}
</style>
