import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


// export const useAuthStore  = defineStore('auth', () => {

//   // const storedIsLogin = localStorage.getItem('isLogin')??false;
//   // const storedToken  = localStorage.getItem('token')??'';
//   // const storedUser = localStorage.getItem('user')??'';
//   // const storedRole = localStorage.getItem('role')??'';

//   // const isLogin =  ref(JSON.parse(storedToken) ?? false);
//   // const token = ref(JSON.parse(storedToken) ?? '');
//   // const user = ref(JSON.parse(storedUser) ?? '');
//   // const role = ref(JSON.parse(storedRole) ?? '');

//   // Retrieve values from localStorage with fallbacks

//   // Create refs with explicit types

//   // Record<string, unknown>
//   try {
//     const storedIsLogin: boolean = localStorage.getItem('isLogin') === 'true';
//     const storedToken: string | null = localStorage.getItem('token');
//     const storedUser: string | null = localStorage.getItem('user');
//     const storedRole: string | null = localStorage.getItem('role');
  
//     const isLogin = ref<boolean>(storedIsLogin);
//     const token = ref<string>(storedToken ? JSON.parse(storedToken) : '');
//     const user = ref<Record<string, unknown>>(storedUser ? JSON.parse(storedUser) : {});
//     const role = ref<string>(storedRole ? JSON.parse(storedRole) : '');
  
//     // Computed property for Authorization header
//     const Authorization = computed(() => 'Bearer ' + token.value);
  
//     return { isLogin, token, user, role, Authorization };
//   } catch (error) {
//     console.error('Error parsing JSON:', error);
//     // Handle the error appropriately
//     // Return default values or notify the user about the issue
//     return {
//       isLogin: ref<boolean>(false),
//       token: ref<string>(''),
//       user: ref<Record<string, unknown>>({}),
//       role: ref<string>(''),
//       Authorization: computed(() => ''),
//     };
//   }
// })



export const useAuthStore = defineStore('auth', () => {
  // ... (other imports)

  const storedIsLogin: boolean = localStorage.getItem('isLogin') === 'true';
  const storedToken: string | null = localStorage.getItem('token');
  const storedUser: string | null = localStorage.getItem('user');
  const storedRole: string | null = localStorage.getItem('role');

  const isLogin = computed(() => storedIsLogin);
  const token = computed(() => storedToken ? JSON.parse(storedToken) : '');
  const user = computed(() => storedUser ? JSON.parse(storedUser) : {});
  const role = computed(() => storedRole ? JSON.parse(storedRole) : {});

  const Authorization = computed(() => 'Bearer ' + token.value);

  return {
    isLogin: ref(isLogin),
    token: ref(token),
    user: ref(user),
    role: ref(role),
    Authorization: computed(() => Authorization.value),
  };
});
