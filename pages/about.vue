<script lang="ts" setup>
enum FILIAL_ENUM {
   MAIN = "MAIN",
   TWOFILIAL = "TWOFILIAL",
   THEEFILIAL = "THEEFILIAL",
   FOURFILIAL = "FOURFILIAL",
}
const _date = ref(FILIAL_ENUM.MAIN)


</script>
<template>
   <NuxtLayout>

      <div class="bg-danger py-6">
         <div class="container flex justify-between">
            <div>
               <h1 class="font-montserrat-700 text-[75px]  text-white py-5">Biz haqimizda</h1>
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
      <div class="container">
         <h2 class="flex justify-center items-center text-[22px] font-montserrat-600 mt-10 mb-5">“Moowmotors” bu -</h2>
         <div class="grid grid-cols-3 items-start gap-5">
            <div class="p-5 bg-gray-600 rounded-t-3xl border-b border-b-danger">
               <img src="@/assets/img/about1.svg" alt="">
               <h3 class="text-lg font-montserrat-600 my-2">Ko’p yillik tajriba</h3>
               <p>Sit amet consectetur. Lacus sit at sagittis vel viverra consectetur non odio facilisi. Sed justo non
                  etiam
                  vitae porttitor. Eros arcu pretium egestas auctor amet. </p>
            </div>
            <div class="p-5 bg-gray-600 rounded-t-3xl border-b border-b-danger">
               <img src="@/assets/img/about2.svg" alt="">
               <h3 class="text-lg font-montserrat-600 my-2">Ishonchli hizmat</h3>
               <p>Sit amet consectetur. Lacus sit at sagittis vel viverra consectetur non odio facilisi. Sed justo non
                  etiam vitae porttitor. Eros arcu pretium egestas auctor amet. Cras eget sed nibh adipiscing neque velit
                  tellus. </p>
            </div>
            <div class="p-5 bg-gray-600 rounded-t-3xl border-b border-b-danger">
               <img src="@/assets/img/about3.svg" alt="">
               <h3 class="text-lg font-montserrat-600 my-2">Professionallar jamoasi</h3>
               <p>Sit amet consectetur. Lacus sit at sagittis vel viverra consectetur non odio facilisi. Sed justo non
                  etiam
                  vitae porttitor. Eros arcu pretium egestas auctor amet. </p>
            </div>
         </div>
         <h2 class="flex justify-center items-center text-[22px] font-montserrat-600 mt-10 mb-5">Bizning jamoa</h2>
         <div class="flex justify-center items-center gap-5 flex-wrap">
            <about-card class="w-[280px]" v-for="item in 7" :key="item" />
         </div>
         <div class="mt-20 mb-6 w-fit flex items-center justify-center rounded-3xl border border-gray-300 p-[2px]">
            <div @click="_date = FILIAL_ENUM.MAIN" :class="{ 'bg-danger-400': _date == FILIAL_ENUM.MAIN }"
               class="rounded-3xl px-4 py-2">
               <p>1 Asosiy filial</p>
            </div>
            <div @click="_date = FILIAL_ENUM.TWOFILIAL" :class="{ 'bg-danger-400': _date == FILIAL_ENUM.TWOFILIAL }"
               class="rounded-3xl px-4 py-2">
               <p>2-filial</p>
            </div>
            <div @click="_date = FILIAL_ENUM.THEEFILIAL" :class="{ 'bg-danger-400': _date == FILIAL_ENUM.THEEFILIAL }"
               class="rounded-3xl px-4 py-2">
               <p>3-filial</p>
            </div>
            <div @click="_date = FILIAL_ENUM.FOURFILIAL" :class="{ 'bg-danger-400': _date == FILIAL_ENUM.FOURFILIAL }"
               class="rounded-3xl px-4 py-2">
               <p>4-filial</p>
            </div>
         </div>
         <div class="grid grid-cols-3 gap-5">
            <div class="col-span-2">
               <img class="w-full h-[500px]" src="@/assets/img/karta.png" alt="">
            </div>
            <div class="col-span-1 p-5 rounded-2xl bg-gray-600">
               <div class="flex items-center gap-2 mb-4">
                  <img src="@/assets/img/a1.svg" alt="">
                  <div>
                     <p>Manzil</p>
                     <h3 class="font-montserrat-500 text-lg leading-5">
                        Shayxontohur tumani, Gulobod mahallasi
                     </h3>
                  </div>
               </div>
               <div>
                  <img src="@/assets/img/address.png" alt="">
               </div>
               <div class="flex items-center gap-2 mt-5">
                  <img src="@/assets/img/a1.svg" alt="">
                  <div>
                     <p>Mo’ljal</p>
                     <h3 class="font-montserrat-500 text-lg leading-5">
                        Korzinka supermarketi
                     </h3>
                  </div>
               </div>
               <div class="flex items-center gap-2 mt-5">
                  <img src="@/assets/img/a1.svg" alt="">
                  <div>
                     <p>Ish vaqti</p>
                     <h3 class="font-montserrat-500 text-lg leading-5">
                        09:00 - 8:00
                     </h3>
                  </div>
               </div>
               <div class="flex items-center gap-2 mt-5">
                  <img src="@/assets/img/a1.svg" alt="">
                  <div>
                     <p>Telefon</p>
                     <h3 class="font-montserrat-500 text-lg leading-5">
                        +998 95 770 0202
                     </h3>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <Partners />
            <Relationship />
         </div>
      </div>
   </NuxtLayout>
</template>

<style></style>