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
            <h2 class="mb-5 font-montserrat-600 text-[22px] text-center">Pozitsiya tanlang</h2>
            <div class="grid grid-cols-2 gap-3">
               <div v-for="item in 4" :key="item" class="rounded-xl p-5 bg-white">
                  <h3 class="font-montserrat-600 text-lg">TX 350 Premium</h3>
                  <p class="my-1">275-ot kuchli* turbo kuchli dvigatel;
                     Kengroq yuk tashish imkoni;
                     275-ot kuchli* turbo kuchli dvigatel;</p>
                  <h3 class="font-montserrat-600 text-lg">$69,350</h3>
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