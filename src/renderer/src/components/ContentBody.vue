<script setup lang="ts">
import {onMounted, ref} from "vue";

let fileContent = ref('')

onMounted(() => {
  window.api.requestFileContent()

  window.api.fileContent((_, value) => {
    fileContent.value = value
  })
})
</script>

<template>
  <pre class="content">{{ fileContent }}</pre>
</template>

<style scoped lang="less">
</style>
