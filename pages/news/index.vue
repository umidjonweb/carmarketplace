<script lang="ts" setup>

</script>

<template>
   <NuxtLayout>
      <div class="bg-danger py-8">
         <div class="container flex justify-between">
            <div>
               <h1 class="font-montserrat-700 text-[75px]  text-white py-5">Yangiliklar</h1>
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
      <div class="container mt-12">
         <div class="grid grid-cols-2 gap-5">
            <div class="relative">
               <img class="bg-cover w-full h-[350px] rounded-lg" src="@/assets/img/news_car.png" alt="">
               <div style="background: rgba(13, 13, 13, 0.45);"
                  class="p-5 absolute bottom-5 left-5 rounded-xl max-w-[430px] w-full">
                  <p class="font-montserrat-700 text-lg text-white leading-6 mb-3">Agar siz elektr mashinani xohlasangiz,
                     lekin rozetkaga
                     bog'liq bo'lishni xohlam...</p>
                  <div class="flex items-end gap-2">
                     <p class="text-white w-4/5">Ayni paytda BYD Han deyarli besh metrli boshqaruv sedani bo'lib, Xitoy
                        k...</p>
                     <div class="flex gap-1 w-20">
                        <img src="@/assets/img/calendar-fill.svg" alt="">
                        <p class="text-white">12.06.23</p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
               <NewsCard v-for="item in 2" :key="item" />
            </div>
         </div>
         <div class="grid grid-cols-4 gap-5 mt-5">
            <NewsCard @click="$router.push('/news/2')" v-for="item in 4" :key="item" />
         </div>
         <div class="flex justify-center items-center mt-8">
            <el-button type="danger">Yana yuklash</el-button>
         </div>
      </div>
</NuxtLayout></template>