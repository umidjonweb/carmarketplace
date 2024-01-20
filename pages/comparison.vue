<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
const checked1 = ref(false)
const input1 = ref('')
</script>
<template>
   <NuxtLayout>
      <div class="container comparison">
         <div class="flex justify-between items-center mb-5">
            <div>
               <h3 class="text-[22px] font-montserrat-600">Taqqoslash</h3>
               <p class="text-xs ">Sizni qiziqtiruvchi avtomobillarni tanlang, <br> hamda hususiyatlarni taqqoslang</p>
            </div>
            <el-checkbox v-model="checked1" label="Bir xil xususiyatlarni ko’rsatmaslik" size="large" />
         </div>
         <div class="grid grid-cols-4">
            <div>
               <div class="h-[190px] border border-gray-300 rounded-tl-2xl p-5 flex justify-center flex-col items-center gap-2">
                  <button
                     class="!w-11 !h-11 !rounded-full bg-danger-100 hover:bg-danger/30 flex justify-center items-center !p-0 ">
                     <img src="@/assets/img/add.svg" alt="">
                  </button>
                  <p class="text-xs font-montserrat-600">Yangi qo’shish</p>
                  <p class="text-[10px] text-center">Solishtiruv ro’yxatiga yangi avtmobil qo’shish uchun kerakli
                     avtomobilni
                     tanlang</p>
                  <el-input class="!h-10 w-full" v-model="input1" placeholder="Qidiruv" :suffix-icon="Search" />
               </div>
               <div class="h-20 px-5 flex justify-center items-center border border-gray-300 bg-gray-200">
                  <p class="text-[15px] font-montserrat-600">SmartAccess* Start/Stop tugmasi bilan</p>
               </div>
               <div class="h-20 px-5 flex justify-center items-center border border-gray-300 bg-gray-200">
                  <p class="text-[15px] font-montserrat-600">SmartAccess* Start/Stop tugmasi bilan</p>
               </div>
               <div class="h-20 px-5 flex justify-center items-center border border-gray-300 bg-gray-200">
                  <p class="text-[15px] font-montserrat-600">SmartAccess* Start/Stop tugmasi bilan</p>
               </div>
            </div>
            <div class="" v-for="item in 3" :key="item" >
              <div class="h-[190px] p-5 bg-gray-200 border border-gray-300">
                 <div class="flex justify-between items-start">
                    <img src="@/assets/img/carr.png" alt="">
                    <img src="@/assets/img/close-circle.svg" alt="">
                 </div>
                 <div>
                    <h3 class="text-lg font-montserrat-600 mt-3">Lexus the 2024 NX</h3>
                    <p class="text-danger text-[22px] font-montserrat-700 leading-5">$40,605</p>
                 </div>
              </div> 
               <div class="h-20 bg-white border border-gray-300 flex justify-center items-center">
                  <p class="text-[15px]">Mavjud</p>
               </div>
               <div class="h-20 bg-white border border-gray-300 flex justify-center items-center">
                  <p class="text-[15px]">Mavjud</p>
               </div>
               <div class="h-20 bg-white border border-gray-300 flex justify-center items-center">
                  <p class="text-[15px]">Mavjud</p>
               </div>
            </div>
         </div>
      </div>
   </NuxtLayout>
</template>

<style lang="scss">
.comparison {
   .el-icon {
      font-size: 22px;
   }
}
</style>