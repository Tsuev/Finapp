<template>
  <div
    class="users__wrapper col-12 mb-3 px-2 py-2 flex justify-content-between align-items-center text-2xl border-round-lg">
    <div class="user flex align-items-center">
      <div class="user__avatar bg-primary mr-3">
        <i class="pi pi-user"></i>
      </div>
      <div class="user__data">
        <div class="user__name">
          {{ name }}
        </div>
        <div class="user__money">
          Всего зачислено: {{ check }} руб.
        </div>
      </div>
    </div>
    <div class="user__state">
      <Tag v-if="currentPaid" value="Зачислил"></Tag>
    </div>
    <div class="user__tools">
      <Checkbox @change="$emit('checked', { id, checked })" v-model="checked" :binary="true" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';
import { ref } from 'vue';

const props = defineProps<{
  id: String,
  check: Number,
  name: String,
  currentPaid: Boolean,
}>()

const checked = ref<Boolean>(props.currentPaid)

</script>

<style lang='scss' scoped>

</style>