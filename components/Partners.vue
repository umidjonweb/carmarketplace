<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/navigation';

const modules = ref([Navigation])
      
</script>
<template>
  <div class="partner">
    <h2 class="text-center font-montserrat-600 text-[22px] mt-20 mb-4">Bizning hamkorlarimiz</h2>
  <swiper
    :modules="modules"
    :navigation="true"
    :slides-per-view="10"
    :space-between="20"
  >
    <swiper-slide v-for="item in 12" :key="item">
        <div class="pb-20">
            <div class="flex items-center justify-center p-5 bg-[#F2F4F7] rounded-tl-2xl rounded-br-2xl">
                <img src="@/assets/img/mers.svg" alt="">
            </div>
            <p class="text-center mt-3">Mercedez</p>
        </div>
    
    </swiper-slide>
  </swiper>
  </div>
</template>


<style lang="scss">
.partner{
    .swiper-button-next{
        border-radius: 0px 10px 0px 10px;
        background: #E12C46;
        width: 54px;
        height: 54px;
        bottom: 10px !important;
        top: auto!important;
        right: calc(50% - 60px)!important;
        &::after{
            font-size: 18px;
            font-weight: 900;
            color: white!important;
        }
    }
    .swiper-button-prev{
        border-radius: 10px 0px 10px 0px;
        background: #E12C46;
        width: 54px;
        height: 54px;
        bottom: 10px !important;
        top: auto!important;
        left: calc(50% - 60px)!important;
          &::after{
            font-size: 18px;
            font-weight: 900;
            color: white!important;
        }
    }
}
</style>