<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const { isLoggedIn } = useAuthStore();

definePageMeta({
  layout: "login",
  middleware: 'auth',
});



</script>

<template>
  <div>
    <h1></h1>

    <loginForm />
  </div>
</template>
