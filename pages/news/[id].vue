<script lang="ts" setup>

</script>

<template>
   <NuxtLayout>
      <div class="max-w-[770px] px-25 w-full mx-auto pt-7">
         <div class="relative">
            <img class="rounded-xl bg-cover w-full h-full" src="@/assets/img/car_id.png" alt="">
            <div style="background: rgba(13, 13, 13, 0.45);"
               class="p-5 absolute bottom-5 left-5 rounded-xl max-w-[620px] w-full">
               <p class="font-montserrat-700 text-[28px] text-white leading-8 mb-3">HiPhil liniyasida bo'ladigan 1300 ot
                  kuchidan ortiq avtomobil "Plan A" deb nomlanadi.</p>
               <div class="flex items-end gap-2">
                  <p class="text-white text-lg font-montserrat-400">Xitoylik startap Human Horizons o‘zining yangi sport
                     avtomobili HiPhi A ni namoyish etdi. Uning debyuti 2025-yilning birinchi choragida bo‘lib o‘tadi. </p>
                  <div class="flex gap-1 w-20">
                     <img src="@/assets/img/calendar-fill.svg" alt="">
                     <p class="text-white">12.06.23</p>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <p class="text-[22px] font-montserrat-600 mb-3 mt-5">Ushbu model haqida nimalarni bilishingiz kerak</p>
            <p class="text-lg font-montserrat-400">Darhol ta'kidlash kerakki, bu butunlay original rivojlanish emas. Ushbu
               avtomobil HiPhi Z sportbeki asosida
               yaratilgan, degan fikr bor.Mashinada yangi old g'ildirakli bamperlar, sport “yubka” va bagaj bo'limlarining
               orqa tomonida qanot mavjud. <br />

               Muhimi, standart HiPhi Z ning ikkala tomonida optikasi bor: old va orqa, u oddiy faralar kabi ishlashi
               mumkin, lekin ayni paytda u haqiqatan ham turli his-tuyg'ularni etkaza oladi. Bundan tashqari, HiPhi A-da
               optikaga ega bu pastki qismlar ham aerodinamik elementlar - bitta bamper bilan almashtirildi.</p>
         </div>
         <div class="bg-white my-5 p-5  rounded-3xl flex items-start gap-5">
            <img src="@/assets/img/note.png" alt="">
            <p class="text-lg">Ichki makon unchalik o'zgarmadi. Shuningdek, ikki pog'onali ko'p funksiyali rul, markaziy
               multimedia ekrani
               va orqa ko'zgu vazifasini bajaradigan ikkita displey mavjud. Shunga qaramay, tugatish standart HiPhi Z dan
               biroz farq qiladi.</p>
         </div>
         <p class="text-[22px] font-montserrat-600 mb-3 mt-5">HiPhi A kim bilan raqobatlashadi?</p>
         <p class="text-lg font-montserrat-400 mb-5">Shubhasiz, yangi pishirilgan HiPhi A ning asosiy raqobatchisi Geely
            kompaniyasining Zeekr 001
            FR sportbeki bo'lishi kerak. Uning elektr stantsiyasida umumiy quvvati 1265 ot kuchi bo'lgan 4 ta elektr
            dvigateli mavjud bo'lib, u birinchi yuzlikka 2,07 soniyada tezlashadi. Shunday qilib, maksimal tezlik 285
            km/soat bilan cheklangan. Yangi HiPhi A qog'ozda ancha dinamik sportkarga o'xshaydi.</p>
            <img class="w-full" src="@/assets/img/Asosiy.png" alt="">
            
      </div>
      <div class="bg-white py-10 mt-7">
         <h2 class="text-[22px] font-montserrat-600 text-center mb-5">O’xshash Yangiliklar</h2>
         <div class="container grid grid-cols-4 gap-5">
            <NewsCard v-for="item in 4" :key="item"/>    
         </div>
      </div>
</NuxtLayout></template>