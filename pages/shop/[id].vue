<script lang="ts" setup>
const _item = ref({
   first_name: '',
   phone: '',
   product_size: '',
   product_amount: '',
})
const options = ref([
   {
      value: 'Barchasi',
      label: 'Barchasi',
   },
   {
      value: 'Option2',
      label: 'Option2',
   },
   {
      value: 'Option3',
      label: 'Option3',
   }
])
</script>

<template>
   <NuxtLayout>
      <div class="bg-gray-700">
         <div class="container py-6">
            <div class="grid grid-cols-3 gap-5">
               <div class="col-span-2 bg-white rounded-xl p-5">
                  <div class="grid grid-cols-2 items-center gap-5">
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
                     <h3 class="font-montserrat-600 text-[22px] mt-5 mb-1">Tavsifi</h3>
                     <p class="w-4/5">Faqat organik qo'shimchalar, monoetilen glikol va demineralizatsiyalangan suvni o'z
                        ichiga olgan
                        tayyor mahsulot (suv/antifriz aralashmalaridan saqlanish). Barcha sovutish tizimlari uchun (quyma
                        temir va alyuminiy qismlar uchun) ishlatiladi: har qanday turdagi dvigatellar (yo'lovchi vagonlari,
                        yuk mashinalari, qurilish va qishloq xo'jaligi mashinalari, mototsikllar, ...), ayniqsa ishlab
                        chiqaruvchidan foydalanishni tavsiya qilgan hollarda. organik suyuqlik.</p>
                  </div>
                  <div class="rounded-xl">
                     <h3 class="text-[22px] font-montserrat-600 mb-2 mt-4">Xususiyatlari</h3>
                     <div class="w-4/5 grid grid-cols-2 gap-5">
                        <div class="bg-gray-600 p-3 rounded-md flex gap-3 items-start">
                           <img src="@/assets/img/shining-line.svg" alt="">
                           <div>
                              <p class="text-lg font-montserrat-600">5 litr</p>
                              <p>Mahulot hajmi</p>
                           </div>
                        </div>
                        <div class="bg-gray-600 p-3 rounded-md flex gap-3 items-start">
                           <img src="@/assets/img/shining-line.svg" alt="">
                           <div>
                              <p class="text-lg font-montserrat-600">-37 °C</p>
                              <p>Muzlash harorati</p>
                           </div>
                        </div>
                        <div class="bg-gray-600 p-3 rounded-md flex gap-3 items-start">
                           <img src="@/assets/img/shining-line.svg" alt="">
                           <div>
                              <p class="text-lg font-montserrat-600">G-12</p>
                              <p>VAG indeksi</p>
                           </div>
                        </div>
                        <div class="bg-gray-600 p-3 rounded-md flex gap-3 items-start">
                           <img src="@/assets/img/shining-line.svg" alt="">
                           <div>
                              <p class="text-lg font-montserrat-600">Antifriz</p>
                              <p>Suyuqlik turi</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-span-1">
                  <h3 class="text-[22px] font-montserrat-600 mb-2">Anketa</h3>
                  <p class="">Shaxsiy ma’lumotlarni kiriting, hamda operatorlarimiz siz bilan bog’lanib, buyurtmani
                     qabul qilib olishadi</p>
                  <div class="rounded bg-white mt-5 p-5">
                     <el-form label-position="top">
                        <el-form-item label="Ismingiz">
                           <el-input v-model="_item.first_name" />
                        </el-form-item>
                        <el-form-item label="Telefon raqamingiz">
                           <el-input v-model="_item.phone" />
                        </el-form-item>
                        <el-form-item label="Mahsulot hajmi">
                           <el-select v-model="_item.product_size" clearable placeholder="Select">
                              <el-option v-for="item in options" :key="item.value" :label="item.label"
                                 :value="item.value" />
                           </el-select>
                        </el-form-item>
                        <el-form-item label="Mahsulot miqdori">
                           <el-select v-model="_item.product_amount" clearable placeholder="Select">
                              <el-option v-for="item in options" :key="item.value" :label="item.label"
                                 :value="item.value" />
                           </el-select>
                        </el-form-item>
                        <el-form-item>
                           <el-button @click="$router.push('/shop/successProduct')" type="danger">So’rov yuborish</el-button>
                        </el-form-item>
                     </el-form>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div>
         <h2 class="font-montserrat-600 text-[22px] text-center mt-10 mb-5">O’xshash mahsulotlarimiz</h2>
         <div class="container grid grid-cols-4 gap-5">
           <ProductCard  v-for="item in 4" :key="item"/>
         </div>
      </div>
   </NuxtLayout>
</template>