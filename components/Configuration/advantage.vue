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
      <h2 class="text-[22px] font-montserrat-600 text-center my-5 mt-12">Umumiy ustunliklar</h2>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
         <el-tab-pane label="AROUND VIEW" name="first" />
         <el-tab-pane label="AROUND VIEW" name="second" />
         <el-tab-pane label="AROUND VIEW" name="third" />
         <el-tab-pane label="AROUND VIEW" name="fourth" />
      </el-tabs>
   </div>
   <div class="configuration">
      <swiper :modules="modules" :autoplay="{
         delay: 3500,
         disableOnInteraction: false,
      }" :navigation="true" :slides-per-view="1.2" :centeredSlides="true" :mousewheel="true" :space-between="20">
         <swiper-slide v-for="item in 5" :key="item">
            <div
               class="bg-[url('@/assets/img/configuration1.png')] bg-right-top h-[500px] bg-cover bg-no-repeat relative pb-12 mb-12">
               <div class="absolute bottom-10 right-10">
                  <div class="p-5 rounded-2xl bg-gray-600 w-[350px]">
                     <img src="@/assets/img/c1.svg" alt="">
                     <p class="font-montserrat-600 text-lg my-2">Around view</p>
                     <p>Mashinangiz atrofida nima bo'layotganini bilmoqchimisiz? Around View tizimi displeyda atrofingizni
                        turli burchaklardan ko'rsatadi. Tasvirlar avtomobilning old va orqa qismiga, shuningdek, yon ko'zgu
                        korpuslariga o'rnatilgan keng burchakli kameralardan olingan.</p>
                  </div>
               </div>
            </div>
         </swiper-slide>
      </swiper>
   </div>
</template>

<style lang="scss">
.el-tabs__nav {
   float: none !important;
   justify-content: center;
   align-items: center;
}

.configuration {
   .swiper {
      padding-bottom: 50px;
   }

   .swiper-button-next {
      border-radius: 0px 10px 0px 10px;
      background: #E12C46;
      width: 54px;
      height: 54px;
      bottom: 20px !important;
      top: auto !important;
      right: calc(50% - 60px) !important;

      &::after {
         font-size: 18px;
         font-weight: 900;
         color: white !important;
      }
   }

   .swiper-button-prev {
      border-radius: 10px 0px 10px 0px;
      background: #E12C46;
      width: 54px;
      height: 54px;
      bottom: 20px !important;
      top: auto !important;
      left: calc(50% - 60px) !important;

      &::after {
         font-size: 18px;
         font-weight: 900;
         color: white !important;
      }
   }
}
</style>