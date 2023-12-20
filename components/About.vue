<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/navigation';

const modules = ref([Navigation])
</script>
<template>
   <div class="about">
      <swiper
     :modules="modules"
     :navigation="true"
     :slides-per-view="1"
     :space-between="0"
   >
     <swiper-slide v-for="item in 3" :key="item">
      <div class="bg-[url('@/assets/img/bg.png')] bg-right-top h-[90vh] bg-cover bg-no-repeat relative pb-12 mb-12">
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
     </swiper-slide>
   </swiper>

   </div>

</template>

<style lang="scss">
.about{
    .swiper-button-next{
        border-radius: 0px 10px 0px 10px;
        background: #0D0D0D;
        width: 54px;
        height: 54px;
        bottom: 100px !important;
        top: auto!important;
        right: calc(15% - 60px)!important;
        &::after{
            font-size: 18px;
            font-weight: 900;
            color: white!important;
        }
    }
    .swiper-button-prev{
        border-radius: 10px 0px 10px 0px;
        background: #0D0D0D;
        width: 54px;
        height: 54px;
        bottom: 100px !important;
        top: auto!important;
        left: calc(85% - 60px)!important;
          &::after{
            font-size: 18px;
            font-weight: 900;
            color: white!important;
        }
    }
}
</style>