<template>
   <div>
      <div class="relative flex justify-center  bg-gray-600 rounded-md w-full h-[255px] p-6">
         <img class="h-contain m-auto" src="@/assets/img/car1.png" alt="">
         <img class="absolute top-5 right-5" src="@/assets/img/heart_red.svg" alt="">
      </div>
      <p class="mt-3 text-lg">Avtomobil ruli Mercedes 205 Tiptronik RL, charmli...</p>
      <h3 class="font-montserrat-700 text-[22px] my-3">2,086,000 so'm</h3>
      <button @click="$router.push('/shop/2')" class="p-1 rounded text-white bg-success uppercase text-sm">Sotuvda
         mavjud</button>
   </div>
</template>