<script lang="ts" setup>

</script>

<template>
   <NuxtLayout>
      <div class="bg-gray-700">
         <div class="container">
            <div class="grid grid-cols-3 gap-5">
               <div class="col-span-2">
                  <div class="grid grid-cols-2 gap-5">
                     <div class="relative flex justify-center  bg-gray-600 rounded-md w-full h-[327px] p-6">
                        <img class="h-contain m-auto" src="@/assets/img/car1.png" alt="">
                     </div>
                     <div>
                        <button class="bg-secondary text-white px-2 uppercase rounded">Buyurtma orqali</button>
                        <p class="font-montserrat-600 my-2 text-[22px] leading-tight">Avtomobil uchun antifriz Moowmotors
                           XCL 5L
                           (-37°C)</p>
                        <p class="text-xs">Barcha sovutish tizimlari uchun, quyma temir va alyuminiy qismlar uchun
                           ishlatiladi</p>
                        <el-button class="!h-12 flex items-center justify-center mt-3" plain type="danger">
                           <img src="@/assets/img/like1.svg" alt="">
                           <span class="text-danger text-[15px] mx-1">Sevimli</span>
                        </el-button>
                     </div>
                  </div>
                  <div>

                  </div>
               </div>
               <div class="col-span-1">
                  <h3 class="text-[22px] font-montserrat-600 mb-2">Anketa</h3>
                  <p class="">Shaxsiy ma’lumotlarni kiriting, hamda operatorlarimiz siz bilan bog’lanib, buyurtmani
                     qabul qilib olishadi</p>
                  <div class="rounded-xl">

                  </div>
               </div>
            </div>

         </div>
      </div>
   </NuxtLayout>
</template>