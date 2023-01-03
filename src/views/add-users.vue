<template>
  <div class="add-user p-2">
    <h2 class="mb-5">Добавление участника</h2>
    <span class="p-float-label w-full block">
      <InputText id="username" class="w-full" type="text" v-model="user" />
      <label for="username">Введите имя участника...</label>
    </span>
    <Button @click="addUser" label="Сохранить" class="save-btn mt-4" />
  </div>
</template>

<script setup lang='ts'>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';
import { useStore } from '@/stores/store';
const user = ref('')

const store = useStore()

const addUser = () => store.fetchAddUser(user.value).then((res: any) => {
  user.value = ''
  alert(`Участник ${res.name} добавлен!`)
}).catch((e) => alert(e))

</script>

<style lang='scss' scoped>

</style>