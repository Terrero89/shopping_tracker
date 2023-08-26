<script setup lang="ts">
const props = defineProps(["title"]);
</script>

<template>
  <div>
    <slot>
      <h1 class="d-flex justify-content-center">{{ props.title }}</h1>
    </slot>
  </div>
</template>
