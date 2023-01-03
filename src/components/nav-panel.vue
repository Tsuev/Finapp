<template>
  <div class="
    nav 
    bg-primary-reverse 
    p-2 
    border-round-top-2xl 
    flex 
    justify-content-center 
    fixed
    bottom-0
    left-0
    w-full
  ">
    <Button @click="$router.push('/')" class="p-button-rounded mx-2" icon="pi pi-home" />
    <Button @click="$router.push('/users')" class="p-button-rounded mx-2" icon="pi pi-users" />
    <Button @click="$router.push('/add-users')" class="p-button-rounded mx-2" icon="pi pi-user-plus" />
    <Button @click="$router.push('/settings')" class="p-button-rounded mx-2" icon="pi pi-cog" />
  </div>
</template>

<script setup lang='ts' >
import Button from 'primevue/button'
</script>

<style lang='scss'>
.nav button {
  width: 50px !important;
  height: 50px !important;
}

.nav {
  .pi {
    font-size: 25px !important;
  }
}
</style>