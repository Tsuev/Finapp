<template>
  <div class="home grid p-1">
    <div v-if="!statistics" class="col-12">
      <Skeleton width="100%" height="120px" class="mb-2" />
      <Skeleton width="100%" height="120px" class="mb-2" />
      <Skeleton width="100%" height="120px" class="mb-2" />
    </div>
    <div v-if="statistics" class="col-12">
      <statistic :icon="'pi-money-bill'" :title="'Общая сумма'" :num="statistics.totalSum" :color="'bg-green-700'" />
    </div>
    <div v-if="statistics" class="col-6">
      <statistic :icon="'pi-users'" :title="'Участников'" :num="statistics.totalUsers" :type="true"
        :color="'bg-cyan-700'" />
    </div>
    <div v-if="statistics" class="col-6">
      <statistic :icon="'pi-calendar'" :title="'Декабрь'" :num="statistics.monthPayments" :color="'bg-pink-700'" />
    </div>
    <div v-if="statistics" class="col-12">
      <statistic :icon="'pi-chart-line'" :title="'Рекордная сумма'" :num="statistics.recordMonth[1]"
        :color="'bg-indigo-600'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import statistic from '@/components/statistic.vue';
import Skeleton from 'primevue/skeleton';

import { useStore } from '@/stores/store';
import { computed, onMounted } from 'vue';

const store = useStore()
onMounted(() => store.fetchStatistic())
const statistics = computed(() => store.statisctics)
</script>