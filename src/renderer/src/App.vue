<script setup lang="ts">
import HeaderBar from "./components/HeaderBar.vue";
import ContentBody from "./components/ContentBody.vue";
</script>

<template>
  <HeaderBar></HeaderBar>
  <ContentBody></ContentBody>
</template>

<style lang="less">
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: auto;
}

/* Webkit浏览器（Chrome、Safari等）的滚动条样式 */
::-webkit-scrollbar {
  width: 0.5em; /* 设置滚动条宽度 */
}

::-webkit-scrollbar-track {
  background: transparent; /* 设置滚动条背景 */
}

::-webkit-scrollbar-thumb {
  background-color: #000000; /* 设置滚动条滑块颜色 */
  border-radius: 0.25em; /* 设置滚动条滑块圆角 */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #000000; /* 设置滚动条滑块在鼠标悬停时的颜色 */
}

#app {
  background: #000000;
  color: #ffff00;
  font-size: 12px;
  font-family: 'Courier New';
}

.header-bar {
  position: ;
}

</style>
