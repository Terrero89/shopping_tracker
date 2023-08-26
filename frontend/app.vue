<template>
  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'bounce',
      mode: 'out-in'
    }"/>
  </NuxtLayout>

</template>


<style >
.layout-enter-active,
.layout-leave-active {
transition: all 0.4s
}
.layout-enter-from,
.layout-leave-to {
opacity: 0;
filter: blur(0.5rem);
}
</style>