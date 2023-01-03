import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('store', () => {
  const users = ref([])
  const statisctics = ref(null)

  async function fetchUsers():Promise<void> {
    try {
      const request = await axios.get(`${import.meta.env.VITE_DEV_HTTP}/users`)
      users.value = request.data
    } catch (error) {
      alert(`Error: ${error}. Пожалуйста, перезагрузите страницу.`);
    } 
  }

  async function fetchStatistic():Promise<void> {
    try {
      const request = await axios.get(`${import.meta.env.VITE_DEV_HTTP}/statistic`)
      statisctics.value = request.data
    } catch (error) {
      alert(`Error: ${error}. Пожалуйста, перезагрузите страницу.`);
    } 
  }

  async function fetchAddUser(name: string):Promise<void> {
    try {
      const request = await axios.post(`${import.meta.env.VITE_DEV_HTTP}/add-user`, { name })
      await fetchStatistic()
      return request.data
    } catch (error) {
      alert(`Error: ${error}. Пожалуйста, перезагрузите страницу.`);
    }

  }

  async function fetchAddPayment(users: String[]) {
    try {
      const request = await axios.post(`${import.meta.env.VITE_DEV_HTTP}/add-sum`, { userIds: users })
      await fetchStatistic()
      await fetchUsers()
      return request.data
    } catch (error) {
      alert(`Error: ${error}. Пожалуйста, перезагрузите страницу.`);
    }
  }
  return { users, statisctics, fetchUsers, fetchStatistic, fetchAddUser, fetchAddPayment }
})
