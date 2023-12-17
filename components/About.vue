<script lang="ts" setup>

</script>
<template>
   <div class="bg-[url('@/assets/img/bg.png')] h-[80vh] bg-cover bg-no-repeat relative">
      <div class="container">
         <div class="pt-10">
            <h1 class="text-[75px] leading-tight font-montserrat-700 text-white">
               Lexus <br />
               TX 500-h
            </h1>
            <div class="flex gap-5 mt-4">
               <div>
                  <img src="@/assets/img/speed.svg" alt="">
                  <p class="text-white mt-3">0-100km/s</p>
                  <p class="font-montserrat-700 text-white">6 soniyada</p>
               </div>
               <div>
                  <img src="@/assets/img/gas.svg" alt="">
                  <p class="text-white mt-3">100km</p>
                  <p class="font-montserrat-700 text-white">5 litr</p>
               </div>
               <div>
                  <img src="@/assets/img/windy.svg" alt="">
                  <p class="text-white mt-3">Smooth</p>
                  <p class="font-montserrat-700 text-white">EHS system</p>
               </div>
            </div>
            <el-button class="absolute -bottom-4 " type="danger">
               Batafsil info
            </el-button>
         </div>
      </div>
   </div>
</template>

<style></style>