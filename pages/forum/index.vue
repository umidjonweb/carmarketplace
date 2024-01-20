<script lang="ts" setup>
import AddIcon from "@/components/icon/add.vue"
const _forumRef = ref()
enum STATUS_ENUM {
   PUBLIC = "PUBLIC",
   NEW = "NEW"
}
enum DATE_ENUM {
   DAY = "DAY",
   MONTH = "MONTH",
   YEAR = "YEAR",
   ALL = "ALL",
}
const _status = ref(STATUS_ENUM.PUBLIC)
const _date = ref(DATE_ENUM.DAY)



function openModal() {
   _forumRef.value?.open()
}
</script>
<template>
   <NuxtLayout>
      <ForumModal ref="_forumRef" />
      <div class="container">
         <div class="flex justify-between items-center">
            <div>
               <h3 class="text-[22px] font-montserrat-600">Forum</h3>
               <p class="text-xs mt-1 mb-4">Profil oching hamda boshqa insonlar bilan <br /> mulohazalarga qo’shiling</p>
               <el-button @click="openModal" :icon="AddIcon" class="btn" type="danger" plain>Forum yaratish</el-button>
            </div>
            <div class="flex gap-5">
               <div class="flex items-center justify-center rounded-3xl border border-gray-300 p-[2px]">
                  <div @click="_status = STATUS_ENUM.PUBLIC" :class="{ 'bg-danger-400': _status == STATUS_ENUM.PUBLIC }"
                     class="rounded-3xl px-4 py-3">
                     <p>Ommabop</p>
                  </div>
                  <div @click="_status = STATUS_ENUM.NEW" :class="{ 'bg-danger-400': _status == STATUS_ENUM.NEW }"
                     class="rounded-3xl px-4 py-3">
                     <p>Yangi</p>
                  </div>
               </div>
               <div class="flex items-center justify-center rounded-3xl border border-gray-300 p-[2px]">
                  <div @click="_date = DATE_ENUM.DAY" :class="{ 'bg-danger-400': _date == DATE_ENUM.DAY }"
                     class="rounded-3xl px-4 py-3">
                     <p>Kunlik</p>
                  </div>
                  <div @click="_date = DATE_ENUM.MONTH" :class="{ 'bg-danger-400': _date == DATE_ENUM.MONTH }"
                     class="rounded-3xl px-4 py-3">
                     <p>Oylik</p>
                  </div>
                  <div @click="_date = DATE_ENUM.YEAR" :class="{ 'bg-danger-400': _date == DATE_ENUM.YEAR }"
                     class="rounded-3xl px-4 py-3">
                     <p>Yillik</p>
                  </div>
                  <div @click="_date = DATE_ENUM.ALL" :class="{ 'bg-danger-400': _date == DATE_ENUM.ALL }"
                     class="rounded-3xl px-4 py-3">
                     <p>Barcha vaqt</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="grid grid-cols-2 gap-5 mt-8">
            <ForumCard v-for="item in 6" :key="item" />
         </div>
         <div class="flex justify-center items-center mt-8">
            <el-button type="danger">Yana yuklash</el-button>
         </div>
      </div>
   </NuxtLayout>
</template>

<style lang="scss">
.bg-danger-400 {
   p {
      color: #E12C46;
   }
}
</style>