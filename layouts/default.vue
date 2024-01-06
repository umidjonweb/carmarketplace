<script lang="ts" setup>

</script>

<template>
   <div class="min-h-screen">
      <Header />
      <div style="min-height: calc(100vh - 144px); padding-bottom: 70px;" class="bg-gray-600">
         <slot  />
      </div>
      <Footer />
   </div>
</template>