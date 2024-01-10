import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAuthStore  = defineStore('auth', () => {

  const storedIsLogin = localStorage.getItem('isLogin')??false;
  const storedToken  = localStorage.getItem('token')??'';
  const storedUser = localStorage.getItem('user')??'';
  const storedRole = localStorage.getItem('role')??'';

  const isLogin =  ref(JSON.parse(storedToken) ?? false);
  const token = ref(JSON.parse(storedToken) ?? '');
  const user = ref(JSON.parse(storedUser) ?? []);
  const role = ref(JSON.parse(storedRole) ?? []);

  const Authorization = computed(() =>   'Bearer ' + token.value  )


  return { isLogin,token, user, role ,Authorization}
})
