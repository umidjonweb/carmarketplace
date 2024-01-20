<script lang="ts" setup>
const _dialogVisible = ref(false)
const emit = defineEmits(['update'])
const options = [
   {
      value: 'Option1',
      label: 'Option1',
   },
   {
      value: 'Option2',
      label: 'Option2',
   },
   {
      value: 'Option3',
      label: 'Option3',
   },
   {
      value: 'Option4',
      label: 'Option4',
   },
   {
      value: 'Option5',
      label: 'Option5',
   },
]

const _item = ref({
   theme: '',
   title: '',
   subTitle: '',
})
function open() {
   _dialogVisible.value = true
}
function submit() {
   emit('update')
   close()
}
function close() {
   _dialogVisible.value = false
}
defineExpose({
   open
})
</script>
<template>
   <div>

      <el-dialog v-model="_dialogVisible" title="Forum qo’shish" width="500px" :before-close="handleClose">
         <el-form label-position="top">
            <el-form-item label="Mulohaza mavzulari">
               <el-select v-model="_item.theme" clearable placeholder="Select" style="width: 100%">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
               </el-select>
            </el-form-item>
            <el-form-item label="Mulohaza sarlavhasi">
               <el-input v-model="_item.title" />
            </el-form-item>
            <el-form-item label="Mulohaza">
               <el-input :rows="3" type="textarea" placeholder="Kiriting..." v-model="_item.subTitle" />
            </el-form-item>
         </el-form>
         <template #footer>
            <span class="dialog-footer">
               <el-button @click="_dialogVisible = false">Cancel</el-button>
               <el-button type="primary" @click="submit">
                  Confirm
               </el-button>
            </span>
         </template>
      </el-dialog>
   </div>
</template>

<style lang="scss">
.el-dialog {
   border-radius: 20px;
}
</style>