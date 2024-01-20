<script lang="ts" setup>

</script>

<template>
   <div class="container flex justify-between items-center p-4">
      <img class="w-[176px]" src="@/assets/img/logo.svg" alt="">
      <div class="flex gap-7 items-center">
         <router-link to="/katalog">Katalog</router-link>
         <router-link to="/shop">Magazin</router-link>
         <router-link to="/forum">Forum</router-link>
         <router-link to="/news">Yangiliklar</router-link>
         <a href="#">Biz haqimizda</a>
         <a href="#">A’loqa</a>
         <a href="#">Hamkorlar</a>
      </div>
      <div class="flex gap-7 items-center">
         <img class="cursor-pointer" src="@/assets/img/search1.svg" alt="">
         <img class="cursor-pointer" src="@/assets/img/heart1.svg" alt="">
         <img class="cursor-pointer" src="@/assets/img/profile1.svg" alt="">
      </div>
   </div>
</template>
<style>
.container {}
</style>