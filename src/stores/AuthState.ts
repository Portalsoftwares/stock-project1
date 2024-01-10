import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAuthStore  = defineStore('auth', () => {

  // const storedIsLogin = localStorage.getItem('isLogin')??false;
  // const storedToken  = localStorage.getItem('token')??'';
  // const storedUser = localStorage.getItem('user')??'';
  // const storedRole = localStorage.getItem('role')??'';

  // const isLogin =  ref(JSON.parse(storedToken) ?? false);
  // const token = ref(JSON.parse(storedToken) ?? '');
  // const user = ref(JSON.parse(storedUser) ?? '');
  // const role = ref(JSON.parse(storedRole) ?? '');

  // Retrieve values from localStorage with fallbacks
  const storedIsLogin: boolean = localStorage.getItem('isLogin') === 'true';
  const storedToken: string = localStorage.getItem('token') ?? '';
  const storedUser: string = localStorage.getItem('user') ?? '';
  const storedRole: string = localStorage.getItem('role') ?? '';

  // Create refs with explicit types
  const isLogin = ref<boolean>(storedIsLogin);
  const token = ref<string>(JSON.parse(storedToken) ?? '');
  const user = ref(JSON.parse(storedUser) ?? {});
  const role = ref<string>(JSON.parse(storedRole) ?? '');

  const Authorization = computed(() =>   'Bearer ' + token.value  )


  return { isLogin,token, user, role ,Authorization}
})
