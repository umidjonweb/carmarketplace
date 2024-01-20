<script lang="ts" setup>

</script>
<template>
   <div @click="$router.push('/forum/2')" class="text-2xl bg-gray-600 p-5 rounded-xl">
      <div class="flex gap-1">
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
      <h2 class="text-lg font-montserrat-600 my-3">Audi tomonidan ishlab chiqilgan yangi avtomobil haqida qanday fikrdasiz?
         Ustunlik va kamchiliklar...</h2>
      <div class="flex justify-between">
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
</template>

<style lang="scss"></style>