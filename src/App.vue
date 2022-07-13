<script setup>
import { useRouter} from 'vue-router'
const router = useRouter()
const routes = router.getRoutes()
function to(key){
  router.push(key)
}
</script>

<template>
    <a-layout>
      <a-layout-sider width="100">
        <a-menu @menu-item-click="to">
          <a-menu-item v-for="item in routes" :key="item.path">{{item.name}}</a-menu-item>
        </a-menu>
      </a-layout-sider >
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html,body{
  height: 100%;
  width: 100%;
}
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.arco-layout{
  height: 100%;
  .arco-layout-content{
    display:flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
