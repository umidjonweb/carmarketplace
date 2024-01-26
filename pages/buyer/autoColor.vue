<script lang="ts" setup>
import BuyerLayout from './index.vue'
</script>

<template>
   <BuyerLayout>
      <div class="container my-5">
         <div class="grow relative h-[420px] border border-gray-300 rounded-t-3xl">
            <img class="bg-contain h-full w-full" src="@/assets/img/b1.png" alt="">
         </div>
         <div class="p-6 bg-gray-600 rounded-b-3xl">
            <h2 class="mb-5 font-montserrat-600 text-[22px] text-center">Avtomobil rangini tanlang</h2>
            <div class="grid grid-cols-5 gap-3">
               <div v-for="item in 5" :key="item" class="rounded-xl p-3 bg-white">
                  <div class="w-16 h-16 rounded-full bg-[#DFE3EC]">

                  </div>
                  <h3 class="font-montserrat-600 text-lg leading-5 mt-3">Default color option </h3>

               </div>
            </div>
            <div class="flex justify-between items-center mt-10">
               <div>
                  <p class="text-xs">Avtomobil narxi </p>
                  <h2 class="text-3xl font-montserrat-600">$69,350</h2>
               </div>
               <el-button type="danger">Davom etish</el-button>
            </div>
         </div>
      </div>
   </BuyerLayout>
</template>