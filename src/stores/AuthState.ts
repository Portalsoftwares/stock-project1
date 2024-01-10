import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAuthStore  = defineStore('auth', () => {

  const isLogin =  ref(JSON.parse(localStorage.getItem('isLogin')) || false);
  const token = ref(JSON.parse(localStorage.getItem('token')) || '');
  const user = ref(JSON.parse(localStorage.getItem('user')) || []);
  const role = ref(JSON.parse(localStorage.getItem('role')) || []);

  const Authorization = computed(() =>   'Bearer ' + token.value  )


  return { isLogin,token, user, role ,Authorization}
})
