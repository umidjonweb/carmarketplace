<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = ref([Navigation, Autoplay])

import type { TabsPaneContext } from 'element-plus'
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
   console.log(tab, event)
}
</script>
<template>
   <div class="container">
      <h2 class="text-[22px] font-montserrat-600 text-center my-5 mt-12">Pozitsiyalar aro taqqoslash</h2>
      <div class="grid grid-cols-4">
         <div>

            <div class="h-20 px-5 flex justify-center items-center border border-gray-300 bg-gray-200">
               <p class="text-[15px] font-montserrat-600">SmartAccess* Start/Stop tugmasi bilan</p>
            </div>
            <div class="h-20 px-5 flex justify-center items-center border border-gray-300 bg-gray-200">
               <p class="text-[15px] font-montserrat-600">SmartAccess* Start/Stop tugmasi bilan</p>
            </div>
            <div class="h-20 px-5 flex justify-center items-center border border-gray-300 bg-gray-200">
               <p class="text-[15px] font-montserrat-600">SmartAccess* Start/Stop tugmasi bilan</p>
            </div>
            <div class="h-20 px-5 flex justify-center items-center border border-gray-300 bg-gray-200">
               <p class="text-[15px] font-montserrat-600">SmartAccess* Start/Stop tugmasi bilan</p>
            </div>
         </div>
         <div class="" v-for="item in 3" :key="item">

            <div class="h-20 px-5 border border-gray-300 bg-gray-200">
               <h3 class="text-lg font-montserrat-600 my-1">Lexus the 2024 NX</h3>
               <p class="text-danger text-[22px] font-montserrat-700 leading-5">$40,605</p>
            </div>
            <div class="h-20 bg-white border border-gray-300 flex justify-center items-center">
               <p class="text-[15px]">Mavjud</p>
            </div>
            <div class="h-20 bg-white border border-gray-300 flex justify-center items-center">
               <p class="text-[15px]">Mavjud</p>
            </div>
            <div class="h-20 bg-white border border-gray-300 flex justify-center items-center">
               <p class="text-[15px]">Mavjud</p>
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="scss"></style>