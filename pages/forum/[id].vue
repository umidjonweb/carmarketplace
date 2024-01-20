<script lang="ts" setup>

</script>
<template>
   <NuxtLayout>
      <div class="container  grid grid-cols-2 gap-5">
         <div class="bg-gray-600 p-5 rounded-xl">
            <div class="flex gap-2 items-center">
               <img src="@/assets/img/person1.png" alt="">
               <div>
                  <h2 class="text-[15px] font-montserrat-600">Abdurahmon Qodirov</h2>
                  <p class="text-xs">170 ko’rishlar soni</p>
               </div>
            </div>
            <div class="flex gap-1 mt-3 mb-1">
               <div class="rounded bg-white py-[1px] px-1">
                  <p class="text-danger text-xs uppercase">Yangilik</p>
               </div>
               <div class="rounded bg-white py-[1px] px-1">
                  <p class="text-danger text-xs uppercase">Audi</p>
               </div>
               <div class="rounded bg-white py-[1px] px-1">
                  <p class="text-danger text-xs uppercase">Fikr</p>
               </div>
            </div>
            <h2 class="text-[22px] font-montserrat-600">Audi avtomobili haqida fikringiz? </h2>
            <p class="font-[15px]">Yaqinda Taqdimoti o’tkazilgan Audi avtomobili haqida fikringiz qanday, ijtimoiy
               tarmoqlarda ko’p tanqid qilingan bu avtomobilni maqtab chiqga bloggerlar hm kam emas, tomonlar 2xil fikrga
               ega bo’lganliklari uchun sizlarning fikringiz bilan qiziqdim, ushbu model qanday ustunlik hamda
               kamchiliklarga ega deb o’ylaysiz?</p>
            <div class="flex justify-between mt-3">
               <div class="flex gap-1">
                  <img src="@/assets/img/message.svg" alt="">
                  <p class="text-[15px]">6</p>
               </div>
               <div class="flex gap-4">
                  <div class="flex gap-1">
                     <img src="@/assets/img/heart1.svg" alt="">
                     <p class="text-[15px]">36</p>
                  </div>
                  <div class="flex gap-1">
                     <img src="@/assets/img/calendar-fill.svg" alt="">
                     <p class="text-[15px]">12.06.23</p>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div class="flex rounded-lg bg-gray-600 p-[2px]">
               <input class="border-0 outline-0 grow bg-gray-600 mx-3" placeholder="Sizning fikringiz..." type="text">
               <button class="cursor-pointer h-10 bg-danger rounded-lg w-14 flex justify-center items-center">
                  <img src="@/assets/img/send1.svg" alt="">
               </button>
            </div>
            <div class="flex gap-2 items-center my-3">
               <img src="@/assets/img/person1.png" alt="">
               <div>
                  <h2 class="text-[15px] font-montserrat-600">Abdurahmon Qodirov</h2>
                  <p class="text-xs">170 ko’rishlar soni</p>
               </div>
            </div>
            <p>Kimga qanday, shaxsan mening kutuvlarimni oqlamadi, narxiga nisbatan sifat darajasi mutanosib emasdek</p>
            <div class="flex gap-3 mt-2">
               <div class="flex gap-1">
                  <img src="@/assets/img/message.svg" alt="">
                  <p class="text-[15px]">6</p>
               </div>
               <p class="text-danger font-montserrat-600">Javob berish</p>
            </div>
         </div>
      </div>
   </NuxtLayout>
</template>

<style></style>