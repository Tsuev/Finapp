<template>
  <div class="users grid p-2 mb-5">
    <div class="users__title flex justify-content-between align-items-center w-full">
      <h2>{{ getDate().month }} {{ getDate().year }}</h2>
      <Button @click="store.fetchAddPayment(activeUsers)" label="Сохранить" class="save-btn" />
    </div>
    <div v-if="!users.length" class="skeleton col-12 flex">
      <Skeleton shape="circle" height="50px" width="60px" class="mr-3" />
      <div class="skeleton__lines flex justify-content-center w-full flex-column">
        <Skeleton width="70%" class="mb-1" />
        <Skeleton width="30%" />
      </div>
    </div>
    <div v-if="!users.length" class="skeleton col-12 flex">
      <Skeleton shape="circle" height="50px" width="60px" class="mr-3" />
      <div class="skeleton__lines flex justify-content-center w-full flex-column">
        <Skeleton width="70%" class="mb-1" />
        <Skeleton width="30%" />
      </div>
    </div>
    <div v-if="!users.length" class="skeleton col-12 flex">
      <Skeleton shape="circle" height="50px" width="60px" class="mr-3" />
      <div class="skeleton__lines flex justify-content-center w-full flex-column">
        <Skeleton width="70%" class="mb-1" />
        <Skeleton width="30%" />
      </div>
    </div>
    <User @checked="addUserCash" v-for="user in users" :id="user.id" :name="user.name" :check="user.totalSum"
      :current-paid="user.currentPaid" />
  </div>
</template>

<script setup lang='ts' >
import Button from 'primevue/button';
import User from '@/components/user.vue';
import Skeleton from 'primevue/skeleton';

import { ref, computed, onMounted } from 'vue';
import { useStore } from '@/stores/store';
import type { Users } from '@/types/users'
import { getDate } from '@/composables/useDate'

const store = useStore()
const users = computed<Users[]>(() => store.users)
const activeUsers = ref<String[]>([])
const addUserCash = ({ id, checked }: { id: String, checked: Boolean }) => checked ? activeUsers.value.push(id) : activeUsers.value.filter((item: any) => item.id != id)

onMounted(() => {
  store.fetchUsers()
})
</script>

<style lang='scss'>
.users__wrapper {
  border-bottom: 2px solid #333;
}

.user {
  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    overflow: hidden;

    i {
      font-size: 35px;
    }
  }

  &__data {
    font-size: 20px;

    .user__money {
      font-size: 13px;
    }
  }

  &__create {
    font-size: 12px;
  }
}

.save-btn {
  height: 40px;
  font-weight: bold !important;
}
</style>