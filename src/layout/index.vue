<template>
<div class="layout_container">
  <h2>{{aa.data}}</h2>
</div>
</template>

<script setup>
import { reactive } from "vue";

const aa = reactive({data:'公共组件'})
</script>

<style scoped>

</style>