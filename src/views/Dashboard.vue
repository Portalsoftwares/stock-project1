<template>
    <div class="flex w-screen">
         <sidebar class="w-[200px] h-screen bg-gray-800">
            <div class="h-[40px] bg-gray-900 flex items-center font-bold text-white px-2">Logo</div>
            <div class="flex flex-col   text-sm text-white py-2">
                <div class="w-full bg-gray-700 px-2 py-2 cursor-pointer">
                    Dashboard
                </div>
                <div class="w-full px-2 hover:bg-gray-700 px-2 py-2 cursor-pointer ">
                    Items
                </div>
                <div class="w-full px-2 hover:bg-gray-700 px-2 py-2 cursor-pointer ">
                    Customers
                </div>
                <div class="w-full px-2 hover:bg-gray-700 px-2 py-2 cursor-pointer ">
                    Vendors
                </div>
            </div>
         </sidebar>
         <main class=" w-[calc(100vw-200px)]">
            <div class="h-[40px] bg-gray-200 flex items-center ">
                 
             <div class="flex justify-between w-full">
                <div class=" flex items-center space-x-2">
                    <div class="py-2 px-4 hover:bg-gray-300 cursor-pointer"><el-icon><Expand /></el-icon></div>  <span class="text-sm">Home</span>
                </div>
                <div class="flex items-center justify-center text-sm space-x-2 px-2">
                    <div>Profile</div>
                    <div class="rounded-full bg-gray-400 w-[20px] h-[20px]"></div>
                </div>
             </div>
            </div>
            <div class="p-3 h-[calc(100vh-50px)] ">
                <div class="border rounded h-full p-2">
                    <RouterView></RouterView>
                </div>
            </div>
         </main>
    </div>
</template>