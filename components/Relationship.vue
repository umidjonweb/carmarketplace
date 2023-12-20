    <script lang="ts" setup>
    const _item = ref({
        firstname: "",
        phone: "",
     })
    </script>
<template>
  <div class="relationship container">
    <h2 class="text-[22px] mt-16 font-montserrat-600 text-center">Qayta a’loqa</h2>
    <p class="max-w-[530px] mt-1 mb-5 w-full m-auto font-montserrat-400 text-center"> Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va barcha savollaringizga birma-bir javob berib chiqamiz </p>
        <div class="rounded-tl-3xl rounded-br-3xl bg-danger p-5">
          <el-form class="grid grid-cols-3 gap-5 items-end" label-position="top">
               <el-form-item label="Ismingiz">
                  <el-input  v-model="_item.firstname"  placeholder="Ismingizni kiriting" />
               </el-form-item>
                 <el-form-item label="Telefon raqam">
                  <el-input  v-model="_item.phone"  placeholder="Telefon raqamingizni kiriting" />
               </el-form-item>
                <el-form-item>
                  <el-button type="danger"  class="!w-full !h-[46px] !border !border-white">So’rov yuborish</el-button>
               </el-form-item>
            </el-form>
      </div>
  </div>
</template>


<style lang="scss">
.relationship {
.el-form--default.el-form--label-top .el-form-item .el-form-item__label {
    color: white !important;;
}
.el-input__wrapper{
    border-radius: 20px 0px  20px 0px !important;
}
}
</style>