<script lang="ts" setup>

</script>

<template>
   <NuxtLayout>
      <Configuration />
      <div class="bg-gray-600 py-3">
         <div class="container flex justify-between items-center">
            <div class="flex gap-5">
               <a class="cursor-pointer" href="#">Umumiy ma’lumot</a>
               <a class="cursor-pointer" href="#">Pozitsiyalar</a>
               <a class="cursor-pointer" href="#">Ustunliklar</a>
               <a class="cursor-pointer" href="#">Taqqoslash</a>
               <a class="cursor-pointer" href="#">360</a>
               <a class="cursor-pointer" href="#">Galereya</a>
            </div>
            <div class="flex gap-8 items-center">
               <img src="@/assets/img/heart2.svg" alt="">
               <el-button type="danger">Konfiguratsiyalarni tanlash</el-button>
            </div>
         </div>
      </div>
      <ConfigurationInformation />
      <ConfigurationPositions />
      <ConfigurationAdvantage />
      <ConfigurationComparison />
      <ConfigurationVertual />
      <ConfigurationGallery />
      <div class="container">
         <h2 class="text-[22px] font-montserrat-600 text-center my-5 mt-12">Boshqa modellar</h2>
         <div class="grid grid-cols-4 gap-5">
            <CarCard v-for="item in 4" :key="item" />
         </div>
      </div>
      <Relationship />
   </NuxtLayout>
</template>