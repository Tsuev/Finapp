<template>
  <div class="statistic grid m-1 border-round-2xl justify-content-center" :class="color">
    <div class="col-12 text-center pb-0">
      <i class="pi" :class="icon"></i>
    </div>
    <div class="col-12 text-center pt-0">{{ title }}</div>
    <div class="col-12 text-center">{{ num }} {{ type ? '' : '₽' }}</div>
  </div>
</template>

<script setup lang='ts' >
defineProps<{
  icon: string,
  title: string,
  num: number,
  color: string,
  type?: boolean
}>()
</script>

<style lang='scss' scoped>
.statistic {
  font-size: 20px;
  box-shadow: 0px 3px 13px 0px rgba(34, 60, 80, 1) inset;
}

i {
  font-size: 30px;
}
</style>