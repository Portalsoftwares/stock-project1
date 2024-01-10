// authMiddleware.js
import { useAuthStore } from '../stores/AuthState';
import { ref, computed } from "vue";

export function authMiddleware(to: any, from : any, next : any) {
  const authStore = useAuthStore();

  // Check if the user is authenticated
  if (authStore.isLogin) {
    // User is authenticated, proceed with the navigation
    return  next();
  } else {
    // User is not authenticated, redirect to the login page
    return next('/login');
  }
}