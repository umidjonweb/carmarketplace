<script lang="ts" setup>
const _item = ref({
   brand: "",
   bodyType: "",
   pover: "",
   battery: "",
   toPrice: "",
   fromPrice: "",

})
const options = [
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
]
</script>

<template>
   <div class="container mt-16">
      <div class="grid grid-cols-4 gap-6">
         <div class="goptionsrid-cols-1">
            <h2 class="text-xl font-montserrat-600">Filter</h2>
            <el-form label-position="top">
               <el-form-item label="Marka">
                  <el-select v-model="_item.brand" clearable placeholder="Select">
                     <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
               </el-form-item>
               <el-form-item label="Kuzov turi">
                  <el-select v-model="_item.bodyType" clearable placeholder="Select">
                     <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
               </el-form-item>
               <el-form-item label="Quvvat zahirasi">
                  <el-select v-model="_item.pover" clearable placeholder="Select">
                     <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
               </el-form-item> <el-form-item label="Batareya quvvati">
                  <el-select v-model="_item.battery" clearable placeholder="Select">
                     <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
               </el-form-item>
               <div class="grid grid-cols-2 gap-2">
                  <el-form-item label="Narxi dan">
                     <el-input v-model="_item.toPrice" />
                  </el-form-item>
                  <el-form-item label="Narxi gacha">
                     <el-input v-model="_item.fromPrice" />
                  </el-form-item>
               </div>
            </el-form>
         </div>
         <div class="grid grid-cols-3 col-span-3 gap-6">
            <div v-for="item in 9" :key="item" class=" rounded-tl-3xl rounded-br-3xl overflow-hidden">
               <div class="relative">
                  <img class="bg-cover h-full w-full" src="@/assets/img/auto.png" alt="">
                  <img class="absolute top-6 right-6 cursor-pointer" src="@/assets/img/like.svg" alt="">
               </div>
               <div class="bg-danger p-5">
                  <h4 class="font-montserrat-700 text-white">Lexus Futuristic 5000</h4>
                  <p class="font-montserrat-400 text-xs text-white mt-2">Start</p>
                  <div class="flex items-center justify-between">
                     <p class="text-white text-[22px] font-montserrat-700">$69,350</p>
                     <img class="cursor-pointer" src="@/assets/img/next.svg" alt="">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>