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
            <car-card v-for="item in 9" :key="item" />
         </div>
      </div>
   </div>
</template>
<style lang="scss" >
.bg-danger-400 {
   p {
      font-weight: 600;
      color: #E12C46;
   }
}
</style>