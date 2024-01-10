import { ref, computed } from 'vue'
import { defineStore } from 'pinia'




export const useAuthStore = defineStore('auth', () => {
  // ... (other imports)

  const storedIsLogin = localStorage.getItem('isLogin') === 'true';
  const storedToken= localStorage.getItem('token');
  const storedUser= localStorage.getItem('user');
  const storedRole = localStorage.getItem('role');

  const isLogin =  ref(storedIsLogin);
  const token =  ref(storedToken ? JSON.parse(storedToken) : '');
  const user =  ref(storedUser ? JSON.parse(storedUser) : {});
  const role = ref(storedRole ? JSON.parse(storedRole) : {});

  const Authorization = computed(() => 'Bearer ' + token.value);

  return {
    isLogin: ref(isLogin),
    token: ref(token),
    user: ref(user),
    role: ref(role),
    Authorization: Authorization,
  };
});
