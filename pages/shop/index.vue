<script lang="ts" setup>
const _search = ref('')

</script>
<template>
   <NuxtLayout>
      <div class="bg-danger py-8">
         <div class="container flex justify-between">
            <div>
               <h1 class="font-montserrat-700 text-[75px]  text-white py-5">Magazin</h1>
               <el-input class="!w-[530px] " v-model="_search" placeholder="Qidiruv" />
            </div>
            <div class="flex items-center  gap-8">
               <div class="flex justify-center items-center flex-col">
                  <img src="@/assets/img/medal-star.svg" alt="">
                  <p class="font-montserrat-600 text-white text-lg">Raqam</p>
                  <p class="font-montserrat-400 text-white text-xs">statistika nomi</p>
               </div>
               <div class="flex justify-center items-center flex-col">
                  <img src="@/assets/img/medal-star.svg" alt="">
                  <p class="font-montserrat-600 text-white text-lg">Raqam</p>
                  <p class="font-montserrat-400 text-white text-xs">statistika nomi</p>
               </div>
               <div class="flex justify-center items-center flex-col">
                  <img src="@/assets/img/medal-star.svg" alt="">
                  <p class="font-montserrat-600 text-white text-lg">Raqam</p>
                  <p class="font-montserrat-400 text-white text-xs">statistika nomi</p>
               </div>
            </div>
         </div>
      </div>
      <div>
         <p class="font-montserrat-600 text-[22px] text-center mt-10 mb-5">Ommabop mahsulotlarimiz</p>
         <div class="container grid grid-cols-4 gap-5">
            <div v-for="item in 4" :key="item">
               <div class="relative flex justify-center  bg-gray-600 rounded-md w-full h-[255px] p-6">
                  <img class="h-contain m-auto" src="@/assets/img/car1.png" alt="">
                  <img class="absolute top-5 right-5" src="@/assets/img/heart_red.svg" alt="">
               </div>
               <p class="mt-3 text-lg">Avtomobil ruli Mercedes 205 Tiptronik RL, charmli...</p>
               <h3 class="font-montserrat-700 text-[22px] my-3">2,086,000 so'm</h3>
               <button  @click="$router.push('/shop/2')" class="p-1 rounded text-white bg-success uppercase text-sm">Sotuvda mavjud</button>
            </div>
         </div>
         <p class="font-montserrat-600 text-[22px] text-center mt-20 mb-5">Kategoriyalar</p>
         <div class="container grid grid-cols-4 gap-5">
               <div class="relative flex items-end h-[107px] rounded-t-xl bg-gray-600 p-5">
                  <img class="mr-3" src="@/assets/img/tire.svg" alt="">
                  <div>
                     <h2 class="font-montserrat-600 ">Ehtiyot qismlar</h2>
                     <p class="text-xs">35 mahsulot</p>
                  </div>
                  <img class="absolute top-5 right-5" src="@/assets/img/send.svg" alt="">
               </div>
               <div class="relative flex items-end h-[107px] rounded-t-xl bg-gray-600 p-5">
                  <img class="mr-3" src="@/assets/img/tire1.svg" alt="">
                  <div>
                     <h2 class="font-montserrat-600 ">Shinalar</h2>
                     <p class="text-xs">35 mahsulot</p>
                  </div>
                  <img class="absolute top-5 right-5" src="@/assets/img/send.svg" alt="">
               </div>
               <div class="relative flex items-end h-[107px] rounded-t-xl bg-gray-600 p-5">
                  <img class="mr-3" src="@/assets/img/tire2.svg" alt="">
                  <div>
                     <h2 class="font-montserrat-600 ">Moylar</h2>
                     <p class="text-xs">35 mahsulot</p>
                  </div>
                  <img class="absolute top-5 right-5" src="@/assets/img/send.svg" alt="">
               </div>
               <div class="relative flex items-end h-[107px] rounded-t-xl bg-gray-600 p-5">
                  <img class="mr-3" src="@/assets/img/tire3.svg" alt="">
                  <div>
                     <h2 class="font-montserrat-600 ">Akkummlyator</h2>
                     <p class="text-xs">35 mahsulot</p>
                  </div>
                  <img class="absolute top-5 right-5" src="@/assets/img/send.svg" alt="">
               </div>
         </div>
         <p class="font-montserrat-600 text-[22px] text-center mt-20 mb-5">Yangi mahsulotlarimiz</p>
         <div class="container grid grid-cols-4 gap-5">
            <div v-for="item in 8" :key="item">
               <div class="relative flex justify-center  bg-gray-600 rounded-md w-full h-[255px] p-6">
                  <img class="h-contain m-auto" src="@/assets/img/car1.png" alt="">
                  <img class="absolute top-5 right-5" src="@/assets/img/heart_red.svg" alt="">
               </div>
               <p class="mt-3 text-lg">Avtomobil ruli Mercedes 205 Tiptronik RL, charmli...</p>
               <h3 class="font-montserrat-700 text-[22px] my-3">2,086,000 so'm</h3>
               <button  @click="$router.push('/shop/2')" class="p-1 rounded text-white bg-success uppercase text-sm">Sotuvda mavjud</button>
            </div>
         </div>
         <div class="flex justify-center items-center mt-12">
            <el-button type="danger">Yana yuklash</el-button>
         </div>
      </div>
   </NuxtLayout>
</template>

<style></style>