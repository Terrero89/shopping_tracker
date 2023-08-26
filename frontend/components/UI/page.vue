<script setup>
// definePageMeta({
//   layout: "default",
//   middleware: "auth",
// });
</script>

<template>
  <div>
    <div class="wrapper row">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  /* border: solid rgb(212, 211, 211, 0.8) 1px; */

  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 1rem 0;
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
}
</style>
