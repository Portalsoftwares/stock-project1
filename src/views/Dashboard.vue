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
            </div>
        </sidebar>
        
         <main class="w-screen transition-width ease-in-out duration-75">
            <div class="h-[50px] bg-gray-100 flex items-center ">
             <div class="flex justify-between w-full">
                <div class=" flex items-center space-x-2" >
                    <div class="h-[50px] flex items-center px-4 hover:bg-gray-300 cursor-pointer" @click="toggleMenu"><el-icon><Expand /></el-icon></div>  <span class="text-md">Home</span>
                </div>
                <div class="flex items-center justify-center text-md space-x-4 px-4">
                    <div class="flex items-center justify-center space-x-2 border-2 active:border-gray-400 px-2 py-2 cursor-pointer rounded hover:bg-gray-200">
                        <el-icon><Menu /></el-icon>
                    </div>
                    <div class="flex items-center justify-center space-x-2 border-2 active:border-gray-400 px-2 md:py-1 py-2 cursor-pointer rounded hover:bg-gray-200">
                        <el-icon><Message /></el-icon>
                        <span class="hidden md:block">Notification</span>
                    </div>
                    <div class="truncate hidden md:block">User Name</div>
                    <div class="rounded-full border-2 active:border-gray-400  cursor-pointer hover:bg-gray-200 w-[35px] h-[35px] flex items-center justify-center">
                        <el-icon><UserFilled /></el-icon>
                    </div>
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
import {useRoute} from 'vue-router'

var isShow = ref(true);
var route = useRoute();

const path = computed(() =>route.path)

const toggleMenu = () => {
    isShow.value = !isShow.value;
}

</script>
<style>
.show-menu {
    width: 300px;
 }
.hide-menu{
    width: 0;
}
</style>