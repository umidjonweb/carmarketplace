<script lang="ts" setup>

</script>

<template>
   <NuxtLayout>
      <div class="container my-5 buyer">
         <div class="flex justify-between gap-5">
            <div class="border h-fit border-gray-300 rounded-br-xl rounded-tr-xl w-[280px] overflow-hidden">
               <router-link to="/buyer/position"
                  class="px-8 py-5  border-b block text-lg bg-gray-200 border-b-gray-300">Pozitsiya</router-link>
               <router-link to="/buyer/autoColor"
                  class="px-8 py-5  border-b block text-lg bg-gray-200 border-b-gray-300 ">Avtomobil
                  Rangi</router-link>
               <router-link to="/buyer/interiorColor"
                  class="px-8 py-5  border-b block text-lg bg-gray-200 border-b-gray-300 ">Salon
                  rangi</router-link>
               <router-link to="/buyer/add"
                  class="px-8 py-5  border-b block text-lg bg-gray-200 border-b-gray-300 ">Qo’shimcha
               </router-link>
               <router-link to="/buyer/general"
                  class="px-8 py-5  border-b block text-lg bg-gray-200 border-b-gray-300 ">Umumiy
               </router-link>
            </div>
            <div class="grow">
               <div class="">
                  <slot />
               </div>
            </div>
         </div>
      </div>
   </NuxtLayout>
</template>
<style lang="scss">
.buyer{
   .router-link-active {
      border-left: 1px solid red;
   }
}
</style>