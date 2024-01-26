<script lang="ts" setup>
enum LIKED_ENUM {
   ALL = "ALL",
   AUTO = "AUTO",
   PRODUCT = "PRODUCT",
}
const _status = ref(LIKED_ENUM.ALL)

</script>

<template>
   <NuxtLayout>
      <div v-if="true">
         <div class="container flex justify-between items-center mt-5">
            <div>
               <h2 class="font-montserrat-600 text-[22px]">Sevimlilar</h2>
               <p class="text-xs mt-2">Bu yerda siz uchun sevimli avtomobil va <br> mahsulotlar saqlanadi</p>
            </div>
            <div class="flex items-center gap-8">
               <div class="flex items-center justify-center rounded-3xl border border-gray-300 p-[2px]">
                  <div @click="_status = LIKED_ENUM.ALL" :class="{ 'bg-danger-400': _status == LIKED_ENUM.ALL }"
                     class="rounded-3xl px-4 py-3">
                     <p>Barchasi</p>
                  </div>
                  <div @click="_status = LIKED_ENUM.AUTO" :class="{ 'bg-danger-400': _status == LIKED_ENUM.AUTO }"
                     class="rounded-3xl px-4 py-3">
                     <p>Avtomobillar</p>
                  </div>
                  <div @click="_status = LIKED_ENUM.PRODUCT" :class="{ 'bg-danger-400': _status == LIKED_ENUM.PRODUCT }"
                     class="rounded-3xl px-4 py-3">
                     <p>Mahsulotlar</p>
                  </div>
               </div>
               <div class="flex gap-2">
                  <p class="font-montserrat-600 text-black/50">Ro’yxatni o’chirish</p>
                  <img src="@/assets/img/delete.svg" alt="">
               </div>
            </div>
         </div>
         <div class="container">
            <h2 class="text-[22px] font-montserrat-600 text-center">Sevimli avtomobillar</h2>
            <div class="grid grid-cols-4 col-span-3 gap-6">
               <car-card v-for="item in 4" :key="item" />
            </div>
            <h2 class="text-[22px] font-montserrat-600 text-center mt-8 mb-4">Sevimli mahsulotlar</h2>
            <div class="grid grid-cols-4 col-span-3 gap-6">
               <product-card v-for="item in 4" :key="item" />
            </div>
         </div>
      </div>
      <div class="flex justify-center items-center" v-else>
         <div class="flex justify-center items-center max-w-[530px] w-full flex-col">
            <h2 class="font-montserrat-600 text-center text-[26px]">Sevimli mahsulotlar hozircha yo’q</h2>
            <p class="">Mahsulot va avtomobil kartochkalaridagi yurakcha belgisini bosish orqali bu yerga ro’yxat korinishida yig’ib
               borishingiz mumkin</p>
            <el-button @click="$router.push('/home')">Asosiy sahifaga o’tish</el-button>
         </div>
      </div>
   </NuxtLayout>
</template>
<style lang="scss">
.bg-danger-400 {
   p {
      font-weight: 600;
      color: #E12C46;
   }
}
</style>