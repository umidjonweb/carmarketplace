<script lang="ts" setup>
const _search = ref('')

</script>
<template>
   <NuxtLayout>
      <div class="bg-danger py-8">
         <div class="container flex justify-between">
            <div>
               <h1 class="font-montserrat-700 text-[75px]  text-white py-5">Katalog</h1>
               <el-input class="!w-[530px] " v-model="_search" placeholder="Qidiruv" />
            </div>
            <div class="flex items-center gap-8">
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
      <Katalog />
      <div class="flex justify-center items-center mt-8">
         <el-button type="danger" class="!h-[46px] !border !border-white">So’rov yuborish</el-button>
      </div>
   </NuxtLayout>
</template>

<style></style>