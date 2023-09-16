<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "auth",
});
const route = useRoute();
const typeUser = route.params.userId
</script>

<template>
  <div>
    <div>admin section from here</div>
    <div>No regulars users beyond this point</div>

    type user: {{ typeUser }}
<hr/>
    with that typeUSER I will make sure to validate the links on header though props 
  </div>
</template> 
