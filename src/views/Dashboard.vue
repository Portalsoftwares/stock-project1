<template>
    <div class="flex w-screen">
         <!-- Backdrop -->
         <div class="md:hidden fixed right-0 w-full h-screen md:bg-gray-800 bg-gray-400 bg-opacity-[0.6] z-10 transition-width ease-in-out duration-75" v-show="isShow"  @click="toggleMenu"></div>
        <!-- SideBar -->
        <sidebar class="fixed md:relative h-screen md:bg-gray-800 bg-gray-800 overflow-hidden transition-width ease-in-out duration-300 z-50" :class="isShow?'show-menu':'hide-menu'" >
          
            <div class="h-[50px] bg-gray-900 flex items-center justify-between  text-white px-2 overflow-hidden">
                <div class="flex justify-center items-center ">
                    <img src="/logo.png" class="w-8 bg-white" />
                    <div class="px-2 font-bold overflow-hidden truncate"> Jonh Deere</div>
                </div>
                <div class="md:hidden block  cursor-pointer p-2 " @click="toggleMenu"> X</div>
            </div>
            <div class="flex flex-col   text-md text-white py-2 overflow-hidden">
                <RouterLink to="/">
                    <div class="w-full  px-2 py-2 cursor-pointer" :class="path=='/'?'bg-gray-700':''" >
                        Dashboard
                    </div>
                </RouterLink>
                <RouterLink to="/products">
                    <div class="w-full px-2 hover:bg-gray-700 px-2 py-2 cursor-pointer " :class="path=='/products'?'bg-gray-700':''">
                        Products
                    </div>
                </RouterLink>
                <RouterLink to="/customers">
                    <div class="w-full px-2 hover:bg-gray-700 px-2 py-2 cursor-pointer " :class="path=='/customers'?'bg-gray-700':''">
                        Customers
                    </div>
                </RouterLink>
                <RouterLink to="/vendors">
                    <div class="w-full px-2 hover:bg-gray-700 px-2 py-2 cursor-pointer " :class="path=='/vendors'?'bg-gray-700':''">
                        Vendors
                    </div>
                </RouterLink>
                <RouterLink to="/invoices">
                    <div class="w-full px-2 hover:bg-gray-700 px-2 py-2 cursor-pointer " :class="path=='/invoices'?'bg-gray-700':''">
                        Invoices
                    </div>
                </RouterLink>
                <RouterLink to="/purchases">
                    <div class="w-full px-2 hover:bg-gray-700 px-2 py-2 cursor-pointer " :class="path=='/purchases'?'bg-gray-700':''">
                        Purchases
                    </div>
                </RouterLink>
            </div>
        </sidebar>
        
         <main class="" :class="!isShow?'w-screen':'main-width'">
            <div class="h-[50px] bg-gray-100 flex items-center ">
             <div class="flex justify-between w-full">
                <div class=" flex items-center space-x-2" >
                    <div class="h-[50px] flex items-center px-4 hover:bg-gray-300 cursor-pointer" @click="toggleMenu"><el-icon><Expand /></el-icon></div>  <span class="text-md">Home</span>
                </div>
                <div class="flex items-center justify-center text-md space-x-4 px-4">
                    <div class="flex items-center justify-center space-x-2 border-2 active:border-gray-400 px-2 py-2 h-[35px] cursor-pointer rounded hover:bg-gray-200">
                        <el-icon><Menu /></el-icon>
                    </div>
         
                    <el-dropdown class="">
                        <div class="flex items-center justify-center space-x-2 border-2 active:border-gray-400 px-2  py-2  h-[35px] cursor-pointer rounded hover:bg-gray-200">
                            <el-icon size="20px" ><Message /></el-icon>
                            
                        </div>
                        <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>
                                <div class="space-x-2 text-left flex  items-center justify-center">
                                      <el-icon><Message /></el-icon>
                                     <div class=" flex flex-col items-start justify-center">
                                        <div>User 1 has been create an invoice #67890</div>
                                        <div class="text-left text-[12px] text-gray-400">2 h ago</div>
                                     </div>
                                 </div>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <div class="space-x-2 text-left flex  items-center justify-center">
                                      <el-icon><Message /></el-icon>
                                     <div class=" flex flex-col items-start justify-center">
                                        <div>User 1 has been create an invoice #67890</div>
                                        <div class="text-left text-[12px] text-gray-400">2 h ago</div>
                                     </div>
                                 </div>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <div class="space-x-2 text-left flex  items-center justify-center">
                                      <el-icon><Message /></el-icon>
                                     <div class=" flex flex-col items-start justify-center">
                                        <div>User 1 has been create an invoice #67890</div>
                                        <div class="text-left text-[12px] text-gray-400">2 h ago</div>
                                     </div>
                                 </div>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <div class="space-x-2 text-left flex  items-center justify-center">
                                      <el-icon><Message /></el-icon>
                                     <div class=" flex flex-col items-start justify-center">
                                        <div>User 1 has been create an invoice #67890</div>
                                        <div class="text-left text-[12px] text-gray-400">2 h ago</div>
                                     </div>
                                 </div>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <div class="space-x-2 text-left flex  items-center justify-center">
                                      <el-icon><Message /></el-icon>
                                     <div class=" flex flex-col items-start justify-center">
                                        <div>User 1 has been create an invoice #67890</div>
                                        <div class="text-left text-[12px] text-gray-400">2 h ago</div>
                                     </div>
                                 </div>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <div class="space-x-2 text-left flex  items-center justify-center">
                                      <el-icon><Message /></el-icon>
                                     <div class=" flex flex-col items-start justify-center">
                                        <div>User 1 has been create an invoice #67890</div>
                                        <div class="text-left text-[12px] text-gray-400">2 h ago</div>
                                     </div>
                                 </div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <div class="truncate hidden md:block">{{ user?.name }}</div>
                    <el-dropdown>
                        <div class="rounded-full border-2 active:border-gray-400  cursor-pointer hover:bg-gray-200 w-[35px] h-[35px] flex items-center justify-center">
                            <el-icon size="20px"><UserFilled /></el-icon>
                        </div>
                        <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>User Profile</el-dropdown-item>
                            <el-dropdown-item>Change Password</el-dropdown-item>
                            <el-dropdown-item divided @click="logout">Logout</el-dropdown-item>
                        </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
             </div>
            </div>
            <div class="p-2 h-[calc(100vh-50px)] ">
                <div class="border-2 rounded h-full p-1">
                    <RouterView></RouterView>
                </div>
            </div>
         </main>
    </div>
</template>

<script setup lang="ts">

import { ref, computed } from "vue";
import { useRouter ,useRoute } from 'vue-router'

import { useAuthStore } from "../stores/AuthState";
import { storeToRefs } from "pinia";

const { user,Authorization } = storeToRefs(useAuthStore()); 

var isShow = ref(true);
var route = useRoute();
const router = useRouter()

const path = computed(() =>route.path)

const toggleMenu = () => {
    isShow.value = !isShow.value;
}

const logout = () => {
    fetch('http://127.0.0.1:8000/api/v1/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-TOKEN',
          'Authorization':  Authorization.value
        },
        body: null
      },)
        .then(response => {
          if (!response.ok) {
            const error = new Error(response.statusText);
            throw error;
          }
          return response.json();
        })
        .then(json => {
            window.localStorage.clear();
            router.push({ path: '/login' })
            return json;
        })
        .catch(err => {

        })
}

</script>
<style>
.show-menu {
    width: 300px;
 }
.hide-menu{
    width: 0;
}
.main-width{
    width: calc(100vw - 300px);
}
</style>