<template>
  <div class="preloader flex justify-content-center align-items-center">
    <i v-if="loading" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <i v-else class="pi pi-check" style="font-size: 2rem"></i>
  </div>
</template>

<script setup lang='ts' >
defineProps<{
  loading: true
}>()
</script>

<style lang='scss' scoped>

</style>